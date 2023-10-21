import React, { useState } from 'react';

import { Box, Button, SwipeableDrawer, TextField, Typography } from '@mui/material';

import BackHeader from '../../../ui-component/BackHeader';
import { strings } from '../../../localizedString';
import { useEffect } from 'react';
import { addNewBankCard } from '../../../api/user';
import Loader from '../../../ui-component/Loader';

const AddCardDrawer = ({ open, onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAdd = () => {
    setLoading(true);
    addNewBankCard(cardNumber)
      .then(() => {
        setLoading(false);
        onClose();
      })
      .catch((err) => {
        const code = err.response.data.code;
        if (code === 'finance-05') {
          setError(strings?.cardAlreadyExists);
        } else {
          setError(err.response.data.error);
        }
        setLoading(false);
      });
  };

  const handleSetCardNumber = (e) => {
    const value = e.target.value.replace(/ /g, '');
    if (value.length === 0 || (!isNaN(parseInt(value, 10)) && value.length <= 16)) {
      setError('');
      setCardNumber(value);
    }
  };

  useEffect(() => {
    setCardNumber('');
    setError('');
  }, [open]);

  return (
    <SwipeableDrawer anchor="bottom" open={open} onClose={onClose} onOpen={() => {}}>
      <Box p={2}>
        {loading && <Loader />}
        <BackHeader title={strings?.addNewCard} onClick={onClose} />

        <Box bgcolor="#E0E0E0" p={3} my={3} borderRadius={3}>
          <TextField
            fullWidth
            dir="ltr"
            type="number"
            value={cardNumber}
            onChange={handleSetCardNumber}
            helperText={error?.card_number?.join?.()}
            error={error?.card_number}
            inputProps={{
              style: { textAlign: 'center', fontSize: 18 }
            }}
          />
        </Box>

        {typeof error === 'string' && (
          <Typography my={1} mx="auto" variant="h5" color="error">
            {error}
          </Typography>
        )}

        <Button fullWidth variant="contained" color="secondary" onClick={handleAdd}>
          {strings?.submit}
        </Button>
        <Box width="100%" height="40vh" />
      </Box>
    </SwipeableDrawer>
  );
};

export default AddCardDrawer;
