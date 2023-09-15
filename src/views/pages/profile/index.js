import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Box, Button, Typography } from '@mui/material';

import BackHeader from '../../../ui-component/BackHeader';
import { strings } from '../../../localizedString';
import MainCard from '../../../ui-component/cards/MainCard';
import BankCard from '../../../ui-component/cards/BankCard';
import { AddCircle } from '@mui/icons-material';
import { getPersianNumber, getPersianTextOfNumber } from '../../../utils/convertor/TomanConvertor';
import Loader from '../../../ui-component/Loader';

const ProfilePage = () => {
  const { user, cards } = useSelector((state) => state.account);

  const userName = useMemo(() => {
    if (user.firstname || user.lastname) {
      return `${user.firstname} ${user.lastname}`;
    }
  }, [user]);

  if (!user || !cards) {
    return <Loader />;
  }

  return (
    <Box>
      <BackHeader title={strings?.profile} />

      <Box display="flex" flexDirection="column" mx="auto" my={4} alignItems="center" gap={2}>
        <Avatar src={user.picture} />
        {userName && <Typography variant="h4">{userName}</Typography>}
        <Typography variant="h5">{getPersianNumber(user.phone_number, false)}</Typography>
      </Box>

      {/* TODO: fetch bank name */}
      {/* TODO: add a new card */}
      {cards.length ? (
        cards.map((card, index) => (
          <MainCard title={strings?.cards} titleButton={!index && <AddCircle />}>
            <BankCard bankName="پاسارگاد" cardNumber={card.card_number} />
          </MainCard>
        ))
      ) : (
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
            {/* TODO: max daily withdraw */}
            {getPersianNumber(114572382)} {strings?.rial}
          </Typography>
        </Box>
      </MainCard>
    </Box>
  );
};

export default ProfilePage;
