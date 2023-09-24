import React, { useState } from 'react';


import { Button, OutlinedInput, SwipeableDrawer, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BackHeader from '../../ui-component/BackHeader';
import { strings } from '../../localizedString';
import MainCard from '../../ui-component/cards/MainCard';
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import { currencyDetails } from '../models/currency';

function ConfirmationDrawer({ open, receiver, amount, currency, wage, onClose, onConfirm }) {
  const [description, setDescription] = useState('');

  return (
    <SwipeableDrawer anchor="bottom" open={open} onClose={onClose} onOpen={() => {}}>
      <Box p={2} bgcolor="#e7e7e7" height='100vh'>
        <BackHeader title={strings?.transfer} onClick={onClose} />

        <MainCard>
          <Typography variant="h4">{strings?.youArePaying}</Typography>

          <Typography mt={2} variant="h5">
            {strings?.receiver}
          </Typography>
          <Typography mt={2} variant="body1">
            {getPersianNumber(receiver, false)}
          </Typography>

          <Typography mt={2} variant="h5">
            {strings?.amountYouPay}
          </Typography>
          <Typography mt={2} variant="body1">
            {getPersianNumber(amount)} {currencyDetails[currency].title}
          </Typography>

          <Typography mt={2} variant="h5">
            {strings?.wage}
          </Typography>
          <Typography my={2} variant="body1">
            {getPersianNumber(wage)} {currencyDetails[currency].title}
          </Typography>

          <OutlinedInput
            fullWidth
            value={description}
            placeholder={strings?.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </MainCard>

        <Box display="flex" gap={1}>
          <Button fullWidth variant="contained" color="secondary" onClick={() => onConfirm(description)}>
            {strings?.submit}
          </Button>
          <Button fullWidth variant="outlined" color="primary" onClick={onClose}>
            {strings?.cancel}
          </Button>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
}

export default ConfirmationDrawer;
