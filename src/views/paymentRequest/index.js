import { useEffect, useState } from 'react';

import { Box, Button } from '@mui/material';
import { OutlinedInput, Typography } from '@mui/material';

import BackHeader from '../../ui-component/BackHeader';
import { strings } from '../../localizedString';
import MainCard from '../../ui-component/cards/MainCard';
import LimitedList from '../../ui-component/LimitedList';
import TransactionRow from '../../ui-component/TransactionRow';
import { currencyDetails } from '../models/currency';
import { getCurrencyList, getUserPaymentRequests } from '../../api/financial';
import Loader from '../../ui-component/Loader';
import CurrencySelection from '../../ui-component/CurrencySelection';

const PaymentRequestPage = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);
  const [payerPhoneNumber, setPayerPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [requests, setRequests] = useState({ for_me: [], for_others_by_me: [] });

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      try {
        setLoading(true);
        const { data } = await getUserPaymentRequests();
        setRequests(data);
        const { data: { currencies }} = await getCurrencyList();
        setCurrencyList(currencies);
        setCurrency(currencies[0]);
      } catch (err) {
        setError(String(err.response.data.error));
      }
      setLoading(false);
    };
    fetchPaymentInfo();
  }, []);

  const handleContinue = () => {};

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <BackHeader title={strings?.transfer} />

      <MainCard title={strings?.messageForSelect}>
        <OutlinedInput
          fullWidth
          type="tel"
          placeholder={strings?.receivingAmount}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <CurrencySelection value={currency} onChange={(e) => setCurrency(e.target.value)} currencyList={currencyList} />
        <OutlinedInput
          fullWidth
          type="text"
          placeholder={strings?.payer}
          value={payerPhoneNumber}
          onChange={(e) => setPayerPhoneNumber(e.target.value)}
        />
        <Typography my={1} mx="auto" variant="h5" color="error">
          {error}
        </Typography>
        <Button fullWidth variant="contained" color="secondary" onClick={handleContinue}>
          {strings?.paymentRequest}
        </Button>
      </MainCard>

      <MainCard title={strings?.forMe}>
        {/* TODO: tranactions date */}
        {/* TODO: receiver info */}
        <LimitedList>
          {requests.for_me.map((trx, index) => {
            const { title, picture } = currencyDetails[trx.currency];
            return (
              <TransactionRow key={index} title={trx.from_user} subtitle="۱۰:۱۲" imageUrl={picture} amount={trx.amount} unit={title} />
            );
          })}
        </LimitedList>
      </MainCard>

      <MainCard title={strings?.forOthersByMe}>
        {/* TODO: tranactions date */}
        {/* TODO: receiver info */}
        <LimitedList>
          {requests.for_others_by_me.map((trx, index) => {
            const { title, picture } = currencyDetails[trx.currency];
            return (
              <TransactionRow key={index} title={trx.from_user} subtitle="۱۰:۱۲" imageUrl={picture} amount={trx.amount} unit={title} />
            );
          })}
        </LimitedList>
      </MainCard>
    </Box>
  );
};

export default PaymentRequestPage;
