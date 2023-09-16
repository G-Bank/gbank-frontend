import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Badge, Box, Button, Typography } from '@mui/material';

import BackHeader from '../../../ui-component/BackHeader';
import { strings } from '../../../localizedString';
import MainCard from '../../../ui-component/cards/MainCard';
import BankCard from '../../../ui-component/cards/BankCard';
import { AddCircle, Edit } from '@mui/icons-material';
import { getPersianNumber, getPersianTextOfNumber } from '../../../utils/convertor/TomanConvertor';
import Loader from '../../../ui-component/Loader';
import { getMaxWithdrawLimit, logoutUser } from '../../../api/user';
import AddCardDrawer from './AddCardDrawer';

const ProfilePage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [maxWithdrawLimit, setMaxWithdrawLimit] = useState(null);

  const { user, cards, accountId } = useSelector((state) => state.account);

  const userName = useMemo(() => {
    if (user.firstname || user.lastname) {
      return `${user.firstname} ${user.lastname}`;
    }
  }, [user]);

  useEffect(() => {
    getMaxWithdrawLimit(accountId, 'irr').then((res) => {
      setMaxWithdrawLimit(res.data.limit);
    });
  }, [accountId]);

  const handleLogout = () => logoutUser();

  const handleNewCard = () => {
    if (user.is_national_code_verified) {
      setDrawerOpen(true);
    }
  };

  if (!maxWithdrawLimit) {
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

        {/* TODO: fetch bank name */}
        <Box my={2} width="100%">
          <Box display="flex" alignItems="center" gap={1} onClick={handleNewCard}>
            <Typography variant="h4">{strings?.cards}</Typography>
            <AddCircle />
          </Box>
        </Box>
        {cards.map((card, index) => (
          <MainCard>
            <BankCard bankName="پاسارگاد" cardNumber={card.card_number} />
          </MainCard>
        ))}
        {!user.is_national_code_verified && (
          <Link to="/authentication">
            <Button fullWidth variant="contained">
              {strings?.authenticationRequiredForCards}
            </Button>
          </Link>
        )}

        <MainCard>
          <Box width="calc(100% + 32px)" m={-2} mb={1} borderRadius="16px 16px 0 0" textAlign="center" p={1} bgcolor="#28A745">
            <Typography color="white">
              {strings?.authLevel} {getPersianTextOfNumber(user.auth_level)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>{strings?.maxDailyWithdraw}</Typography>
            <Typography>
              {getPersianNumber(maxWithdrawLimit)} {strings?.toman}
            </Typography>
          </Box>
        </MainCard>
      </Box>

      <AddCardDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default ProfilePage;
