import React, { useEffect, useMemo, useState } from 'react';

import { Box, Button, OutlinedInput, Typography } from '@mui/material';
import Num2persian from 'num2persian';

import BackHeader from '../../ui-component/BackHeader';
import { strings } from '../../localizedString';
import MainCard from '../../ui-component/cards/MainCard';
import { useSelector } from 'react-redux';
import { depositRequest, getCurrencyList } from '../../api/financial';
import Loader from '../../ui-component/Loader';
import CurrencySelection from '../../ui-component/CurrencySelection';
import { currencyDetails } from '../models/currency';
import LimitedList from '../../ui-component/LimitedList';
import TransactionRow from '../../ui-component/TransactionRow';
import { getUserTransactions } from '../../api/user';

function Deposit() {
  const [loading, setLoading] = useState(false);
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

      <MainCard title={strings?.amountYouPay}>
        <Box display="flex" alignItems="center" gap={1}>
          <OutlinedInput
            fullWidth
            type="tel"
            placeholder={strings?.receivingAmount}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <CurrencySelection value={currency} onChange={(e) => setCurrency(e.target.value)} currencyList={currencyList} />
        </Box>

        <Typography variant="h5" my={2}>
          {Num2persian(amount)} {currencyDetails[currency]?.title}
        </Typography>

        <Typography my={1} mx="auto" variant="h5" color="error">
          {error}
        </Typography>

        <Button fullWidth disabled={!amount} variant="contained" color="primary" onClick={handleSubmit}>
          {strings?.goToIPG}
        </Button>
      </MainCard>

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
