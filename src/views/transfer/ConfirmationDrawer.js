import React, { useEffect, useState } from 'react';

import { Button, OutlinedInput, SwipeableDrawer, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BackHeader from '../../ui-component/BackHeader';
import { strings } from '../../localizedString';
import MainCard from '../../ui-component/cards/MainCard';
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import { currencyDetails } from '../models/currency';
import { useSelector } from 'react-redux';
import { getTransactionFee } from '../../api/financial';

function ConfirmationDrawer({ open, receiver, amount, currency, description, onClose, onConfirm, onDescriptionChange }) {
  const { accountId } = useSelector((state) => state.account);

  const [fee, setFee] = useState({ name: '', amount: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setLoading(true);
      getTransactionFee(accountId, amount, currency)
        .then(({ data }) => {
          setFee({ name: data.name, amount: data.fee });
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [open, amount, currency, accountId]);

  return (
    <SwipeableDrawer anchor="bottom" open={open} onClose={onClose} onOpen={() => {}}>
      <Box p={2} bgcolor="#e7e7e7" height="100vh">
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
            {fee.name}
          </Typography>
          <Typography my={2} variant="body1">
            {getPersianNumber(fee.amount)} {currencyDetails[currency].title}
          </Typography>

          <OutlinedInput fullWidth value={description} placeholder={strings?.description} onChange={onDescriptionChange} />
        </MainCard>

        <Box display="flex" gap={1}>
          <Button fullWidth disabled={loading} variant="contained" color="secondary" onClick={() => onConfirm(description)}>
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
