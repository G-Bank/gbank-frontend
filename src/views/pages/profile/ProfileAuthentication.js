import React from 'react';

import { Box, Button, OutlinedInput, Typography } from '@mui/material';

import { strings } from '../../../localizedString';
import BackHeader from '../../../ui-component/BackHeader';
import MainCard from '../../../ui-component/cards/MainCard';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ProfileAuthentication = () => {
  return (
    <Box>
      <BackHeader title={strings?.authentication} />

      <MainCard>
        <Typography>اطلاعات شما ثبت شد و تا حداکثر ۲۴ ساعت آینده احراز هویت شما انجام میشود.</Typography>
      </MainCard>
      <Link to="/dashboard">
        <Button style={{ color: 'white' }} fullWidth variant='contained' color='success'>رفتن به صفحه اصلی</Button>
      </Link>

      <form style={{ width: '100%' }}>
        <Box display="flex" flexDirection="column" mt={4} gap={1}>
          <OutlinedInput fullWidth type="text" placeholder={strings?.firstname} />
          <OutlinedInput fullWidth type="text" placeholder={strings?.lastname} />
          <OutlinedInput fullWidth type="text" placeholder={strings?.phoneNumber} />
          <OutlinedInput fullWidth type="text" placeholder={strings?.national_code} />
          <OutlinedInput fullWidth type="text" placeholder={strings?.date_of_birth} />

          <Button fullWidth size="large" type="submit" variant="contained" color="info">
            {strings?.submit}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ProfileAuthentication;
