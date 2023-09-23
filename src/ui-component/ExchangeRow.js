import React from 'react';
import { currencyDetails } from '../views/models/currency';
import { Box, Typography } from '@mui/material';
import { strings } from '../localizedString';
import { numberWithCommas } from '../utils/convertor/TomanConvertor';
import { Close } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { convertCurrency } from '../api/financial';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
  cancelButton: {
    width: 20,
    height: 20,
    padding: 4,
    borderRadius: 4,
    background: '#D4D3FF'
  },
  fromPicture: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 0,
    left: 0,
    borderRadius: '50%'
  },
  toPicture: {
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: 0,
    right: 0,
    borderRadius: '50%'
  }
}));

function ExchangeRow({ source, destination, amount, cancelable, onCancelClick }) {
  const styles = useStyles();

  const { picture: fromPicture } = currencyDetails[source];
  const { picture: toPicture } = currencyDetails[destination];

  const [receivingAmount, setReceivingAmount] = useState(0);

  useEffect(() => {
    const loadReceivingAmount = async () => {
      if (source && destination) {
        const { amount: ra } = await convertCurrency(source, destination, amount);
        setReceivingAmount(ra);
      }
    };

    loadReceivingAmount();
  }, [source, destination, amount]);

  return (
    <Box my={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography>{strings?.receivingAmount}</Typography>
          <Typography variant="h5">
            {numberWithCommas(Number(receivingAmount).toFixed(5))} {destination}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="h4">
            {source} to {destination}
          </Typography>
          <Box position="relative" width={32} height={28}>
            <img className={styles.fromPicture} alt={source} src={fromPicture} />
            <img className={styles.toPicture} alt={destination} src={toPicture} />
          </Box>
        </Box>
      </Box>
      {cancelable && (
        <Box display="flex" justifyContent="flex-end" gap={1} mt={1} pl={1} onClick={onCancelClick}>
          <Typography>{strings?.cancel}</Typography>
          <Close className={styles.cancelButton} />
        </Box>
      )}
    </Box>
  );
}

export default ExchangeRow;
