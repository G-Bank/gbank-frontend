import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Box, Button, Typography } from '@mui/material';

import BackHeader from '../../../ui-component/BackHeader';
import { strings } from '../../../localizedString';
import MainCard from '../../../ui-component/cards/MainCard';
import BankCard from '../../../ui-component/cards/BankCard';
import { AddCircle } from '@mui/icons-material';
import { getPersianNumber } from '../../../utils/convertor/TomanConvertor';
import Loader from '../../../ui-component/Loader';

const ProfilePage = () => {
  const { user, cards } = useSelector((state) => state.account);

  if (!user || !cards) {
    return <Loader />;
  }

  return (
    <Box>
      <BackHeader title={strings?.profile} />

      <Box display="flex" flexDirection="column" mx="auto" my={4} alignItems="center" gap={2}>
        <Avatar />
        <Typography variant="h4">میلاد حسینی</Typography>
        <Typography variant="h5">۰۹۹۹۸۸۸۶۶۵۵</Typography>
      </Box>

      <MainCard title={strings?.cards} titleButton={<AddCircle />}>
        <BankCard bankName="پاسارگاد" cardNumber={1234123412341234} />
      </MainCard>
      <MainCard>
        <BankCard bankName="پاسارگاد" cardNumber={1234123412341234} />
      </MainCard>

      <Link to="/authentication">
        <Button fullWidth variant="contained">
          {strings?.authenticationRequiredForCards}
        </Button>
      </Link>

      <MainCard>
        <Box width="calc(100% + 32px)" m={-2} mb={1} borderRadius="16px 16px 0 0" textAlign="center" p={1} bgcolor="#28A745">
          <Typography color="white">سطح کاربری دو</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography>{strings?.maxDailyWithdraw}</Typography>
          <Typography>{getPersianNumber(114572382)} {strings?.rial}</Typography>
        </Box>
      </MainCard>
    </Box>
  );
};

export default ProfilePage;
