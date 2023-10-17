import React, { useEffect, useMemo, useState } from 'react';

import { Alert, Box, Button, OutlinedInput, Typography } from '@mui/material';
import Num2persian from 'num2persian';

import BackHeader from '../../ui-component/BackHeader';
import { strings } from '../../localizedString';
import MainCard from '../../ui-component/cards/MainCard';
import { useSelector } from 'react-redux';
import { depositCallback, depositRequest, getCurrencyList } from '../../api/financial';
import Loader from '../../ui-component/Loader';
import CurrencySelection from '../../ui-component/CurrencySelection';
import { currencyDetails } from '../models/currency';
import LimitedList from '../../ui-component/LimitedList';
import TransactionRow from '../../ui-component/TransactionRow';
import { getUserTransactions } from '../../api/user';
import { Close } from '@mui/icons-material';

function Deposit({ location }) {
  const [loading, setLoading] = useState(false);
  const [callbackStatus, setCallbackStatus] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(true);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [error, setError] = useState('');
  const [currencyList, setCurrencyList] = useState([]);

  const { accountId, transactions } = useSelector((state) => state.account);

  const depositHistory = useMemo(() => transactions.filter((trx) => trx.type === 'deposit' && trx.status !== 'pending'), [transactions]);

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      try {
        setLoading(true);
        const {
          data: { currencies }
        } = await getCurrencyList();
        setCurrencyList(currencies);
        setCurrency(currencies?.[0]);
        await getUserTransactions();
      } catch (err) {
        setError(String(err.response));
      }
      setLoading(false);
    };
    fetchPaymentInfo();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const trackId = params.get('trackId');
    const success = params.get('success');
    const status = params.get('status');

    if (trackId && success && status) {
      setLoading(true);
      depositCallback(trackId, success, status)
        .then((response) => {
          const { message, successful } = response.data;
          setCallbackStatus(message);
          setIsSuccessful(successful);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setIsSuccessful(false);
          setCallbackStatus(err.response.data.error);
        });
    }
  }, [location.search]);

  const handleSubmit = () => {
    if (amount) {
      setLoading(true);
      depositRequest(accountId, amount, currency)
        .then((response) => {
          window.open(response.data.link, '_blank');
          setLoading(false);
        })
        .catch((err) => {
          setError(String(err.response.data.error));
          setLoading(false);
        });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <BackHeader title={strings?.deposit} />

      <MainCard title={strings?.depositAmount}>
        <Box display="flex" alignItems="center" gap={1}>
          <OutlinedInput
            fullWidth
            type="number"
            placeholder={strings?.receivingAmount}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <CurrencySelection value={currency} onChange={(e) => setCurrency(e.target.value)} currencyList={currencyList} />
        </Box>

        <Typography variant="h5" my={2}>
          {Num2persian(Math.floor(amount / 10))} {currencyDetails[currency === 'irr' ? 'toman' : currency]?.title}
        </Typography>

        <Typography my={1} mx="auto" variant="h5" color="error">
          {error}
        </Typography>

        <Button fullWidth disabled={!amount} variant="contained" color="primary" onClick={handleSubmit}>
          {strings?.goToIPG}
        </Button>
      </MainCard>

      {callbackStatus && (
        <Box>
          <Alert severity={isSuccessful ? 'success' : 'error'}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography mx={1} variant="h5">
                {callbackStatus}
              </Typography>
              <Close
                onClick={() => {
                  setCallbackStatus(null);
                }}
              />
            </Box>
          </Alert>
        </Box>
      )}

      <MainCard title={strings?.transactions}>
        <LimitedList>
          {/* TODO: transactions date */}
          {depositHistory.map((trx, index) => {
            const { title, picture } = currencyDetails[trx.currency];
            return <TransactionRow key={index} subtitle="۱۰:۱۲" imageUrl={picture} amount={trx.amount} unit={title} />;
          })}
        </LimitedList>
      </MainCard>
    </Box>
  );
}

export default Deposit;
