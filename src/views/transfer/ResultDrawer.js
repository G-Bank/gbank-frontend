import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, SwipeableDrawer, Typography } from '@mui/material';
import { Box } from '@mui/system';

import BackHeader from '../../ui-component/BackHeader';
import { strings } from '../../localizedString';
import MainCard from '../../ui-component/cards/MainCard';
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import { currencyDetails } from '../models/currency';


function ResultDrawer({ result }) {

  const history = useHistory();

  if (!result) {
    return null;
  }

  return (
    <SwipeableDrawer anchor="bottom" open={!!result} onClose={() => {}} onOpen={() => {}}>
      <Box p={2} bgcolor="#e7e7e7" height='100vh'>
        <BackHeader title={strings?.transfer} onClick={() => history.push('/')} />

        <MainCard bgcolor='#76FF03'>
          <Typography variant="h4">{strings?.paymentSuccess}</Typography>

          <Typography mt={2} variant="h5">
            {strings?.receiver}
          </Typography>
          <Typography mt={2} variant="body1">
            {getPersianNumber(result.destination, false)}
          </Typography>

          <Typography mt={2} variant="h5">
            {strings?.amountYouPay}
          </Typography>
          <Typography mt={2} variant="body1">
            {getPersianNumber(result.amount)} {currencyDetails[result.currency].title}
          </Typography>

          <Typography mt={2} variant="h5">
            {strings?.wage}
          </Typography>
          <Typography my={2} variant="body1">
            {getPersianNumber(result.fee)} {currencyDetails[result.currency].title}
          </Typography>
        </MainCard>

        <Box display="flex" gap={1}>
          <Button fullWidth variant="contained" color="secondary" onClick={() => history.push('/')}>
            {strings?.backToHomePage}
          </Button>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}

export default ResultDrawer;
