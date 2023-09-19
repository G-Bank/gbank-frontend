import { useEffect, useState } from 'react';

import { Box, Button, Input, MenuItem, Select, Typography } from '@mui/material';

import BackHeader from '../../ui-component/BackHeader';
import Loader from '../../ui-component/Loader';
import MainCard from '../../ui-component/cards/MainCard';
import { strings } from '../../localizedString';
import { getCurrencyList } from '../../api/financial';
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import { icons } from '../../assets/images';
import { currencyDetails } from '../models/currency';


const ExchangePage = () => {
  const [payAmount, setPayAmount] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);
  const [originCurrency, setOriginCurrency] = useState('');
  const [destinationCurrency, setDestinationCurrency] = useState('');

  const rate = 5000;

  useEffect(() => {
    getCurrencyList().then(res => {
      const currencies = res.data.currencies;
      setCurrencyList(currencies);
      setOriginCurrency(currencies[0]);
      setDestinationCurrency(currencies[1]);
    });
  }, []);

  const renderSelect = (value, onChange) => (
    <Select value={value} onChange={onChange}>
      {currencyList.map(currency => {
        const { title, picture } = currencyDetails[currency];

        return (
          <MenuItem key={currency} value={currency}>
            <Box width='100%' gap={1} display='flex' justifyContent='space-between'>
              <Typography>{title}</Typography>
              <img width={24} height={24} alt={currency} src={picture} />
            </Box>
          </MenuItem>
        );
      })}
    </Select>
  );

  const handleSwitch = () => {
    setOriginCurrency(destinationCurrency);
    setDestinationCurrency(originCurrency);
  };

  if (!currencyList.length) {
    return <Loader />
  }

  return (
    <Box>
      <BackHeader title={strings?.exchange} />

      <MainCard>
        <Typography>{strings?.amountYouPay}</Typography>
        <Box my={2} display='flex' justifyContent='space-between'>
          <Input value={payAmount} placeholder={strings?.stock} onChange={(e) => setPayAmount(e.target.value)} />
          {renderSelect(originCurrency, e => setOriginCurrency(e.target.value))}
        </Box>

        <Box display='flex' justifyContent='space-between' my={3}>
          <img alt='switch' src={icons.switchIcon} onClick={handleSwitch} />
          <Typography style={{ margin: 'auto' }} variant='h3'>{strings?.exchangeRate} {getPersianNumber(rate)}</Typography>
        </Box>

        <Typography>{strings?.amountYouReceive}</Typography>
        <Box my={2} display='flex' justifyContent='space-between'>
          <Input readOnly value={getPersianNumber(payAmount * rate)} />
          {renderSelect(destinationCurrency, e => setDestinationCurrency(e.target.value))}
        </Box>

        <Button fullWidth variant='contained' color='secondary'>{strings?.exchange}</Button>
      </MainCard>
    </Box>
  );
};

export default ExchangePage;
