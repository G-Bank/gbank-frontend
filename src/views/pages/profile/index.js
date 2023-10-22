import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Badge, Box, Button, Typography } from '@mui/material';

import BackHeader from '../../../ui-component/BackHeader';
import { strings } from '../../../localizedString';
import MainCard from '../../../ui-component/cards/MainCard';
import BankCard from '../../../ui-component/cards/BankCard';
import { AddCircle, Edit } from '@mui/icons-material';
import { getPersianNumber } from '../../../utils/convertor/TomanConvertor';
import Loader from '../../../ui-component/Loader';
import { getMaxLimits, getUserProfile, getUserTiers, logoutUser } from '../../../api/user';
import AddCardDrawer from './AddCardDrawer';
import AuthLevelCard from '../../../ui-component/cards/AuthLevelCard';

const ProfilePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [maxLimits, setMaxLimits] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user, cards, accountId, authLevels } = useSelector((state) => state.account);

  const userName = useMemo(() => {
    if (user.firstname || user.lastname) {
      return `${user.firstname} ${user.lastname}`;
    }
  }, [user]);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);

      await getUserProfile();
      await getUserTiers();

      const limits = await getMaxLimits(accountId, 'irr');
      setMaxLimits(limits);

      setLoading(false);
    };
    fetchUserData();
  }, [accountId]);

  const currentLevel = useMemo(
    () => Object.entries(authLevels).find(([key]) => key === String(user.auth_level))?.[1],
    [authLevels, user.auth_level]
  );

  const handleLogout = () => logoutUser();

  const handleNewCard = () => {
    if (user.is_national_code_verified) {
      setDrawerOpen(true);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Box>
        <BackHeader title={strings?.profile} />

        <Box display="flex" flexDirection="column" mx="auto" my={4} alignItems="center" gap={2}>
          <Link to="/edit">
            <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<Edit />}>
              <Avatar alt={user.firstname} src={user.picture} sx={{ width: 60, height: 60 }} />
            </Badge>
          </Link>
          {userName && <Typography variant="h4">{userName}</Typography>}
          <Typography variant="h5">{getPersianNumber(user.phone_number, false)}</Typography>
          <Button variant="contained" color="error" onClick={handleLogout}>
            {strings?.logout}
          </Button>
        </Box>

        <MainCard>
          <AuthLevelCard link="/auth-level" level={currentLevel?.title} limits={maxLimits} />
        </MainCard>

        {!user.is_national_code_verified && (
          <Link to="/authentication">
            <Button fullWidth variant="contained">
              {strings?.authenticationRequiredForCards}
            </Button>
          </Link>
        )}

        <Box my={2} width="100%">
          <Box display="flex" alignItems="center" gap={1} onClick={handleNewCard}>
            <Typography variant="h4">{strings?.cards}</Typography>
            <AddCircle />
          </Box>
        </Box>
        {cards.map((card) => (
          <MainCard key={card.card_number}>
            <BankCard bankName={card.persian_name} logo={card.logo} cardNumber={card.card_number} />
          </MainCard>
        ))}
      </Box>

      <AddCardDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default ProfilePage;
