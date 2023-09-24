import React, { useEffect, useState } from 'react';

// third patry
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// material ui
import Box from '@mui/material/Box';

// project imports
import FloatingMenu from '../../layout/MainLayout/FloatingMenu';
import Loader from '../../ui-component/Loader';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import MainCard from '../../ui-component/cards/MainCard';
import { strings } from '../../localizedString';
import TransactionRow from '../../ui-component/TransactionRow';
import MoreOptions from '../../ui-component/MoreOptions';
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import { currencyDetails } from '../models/currency';
import { icons } from '../../assets/images';
import { convertCurrency } from '../../api/financial';
import { useMemo } from 'react';
import ExchangeRow from '../../ui-component/ExchangeRow';

const baseCurrency = 'lotf-gold';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [allBalance, setAllBalance] = useState(0);

  const { user, balances, transactions } = useSelector((state) => state.account);

  const exchangeHistory = useMemo(() => transactions.filter((trx) => trx.type === 'exchange'), [transactions]);

  const transferHistory = useMemo(() => transactions.filter((trx) => trx.type === 'transfer'), [transactions]);

  useEffect(() => {
    const loadTotalBalance = async () => {
      if (!balances?.length) {
        setAllBalance(0);
        return;
      }

      setLoading(true);
      for (const balance of balances) {
        const { amount } = await convertCurrency(balance.currency, baseCurrency, balance.amount);
        setAllBalance((ab) => ab + amount);
      }
      setLoading(false);
    };

    loadTotalBalance();
  }, [balances]);

  if (!balances || !user || !transactions || loading) {
    return <Loader />;
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Link to="/profile">
          <Avatar alt={user.firstname} src={user.picture} />
        </Link>
        <Box display="flex" gap={1}>
          {/* TODO: click on these buttons */}
          <img alt="alert" src={icons.alertIcon} />
          <img alt="settings" src={icons.settingsIcon} />
        </Box>
      </Box>

      <MainCard title={strings?.wallet}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1} mb={3} width="100%">
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="subtitle2">معادل موجودی شما به {currencyDetails[baseCurrency].title}</Typography>
            <Typography variant="h2">{getPersianNumber(Number(allBalance).toFixed(5))}</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <img width={60} height={60} alt="balance" src={currencyDetails[baseCurrency].picture} />
          </Box>
        </Box>
        {balances.map((balance) => {
          const { title, picture } = currencyDetails[balance.currency];
          return <TransactionRow key={title} title={title} imageUrl={picture} amount={balance.amount} />;
        })}
        <MoreOptions />

        <Grid container gap={1} mt={3}>
          <Button variant="contained" color="secondary">
            {strings?.deposite}
          </Button>
          <Link to="/transfer">
            <Button variant="contained" color="secondary">
              {strings?.transfer}
            </Button>
          </Link>
          <Link to="/exchange">
            <Button variant="contained" color="info">
              {strings?.exchange}
            </Button>
          </Link>
        </Grid>
      </MainCard>

      <MainCard title={strings?.transactions}>
        {/* TODO: tranactions date */}
        {transferHistory.map((trx, index) => {
          const { title, picture } = currencyDetails[trx.currency];
          return (
            <TransactionRow key={index} title={trx.destination} subtitle="۱۰:۱۲" imageUrl={picture} amount={trx.amount} unit={title} />
          );
        })}
        {/* TODO: limited list */}
        <MoreOptions />
      </MainCard>

      <MainCard title={strings?.exchange}>
        {exchangeHistory.map((trx, index) => (
          <ExchangeRow key={index} {...trx} />
        ))}
        <MoreOptions />
      </MainCard>

      <FloatingMenu />
    </Box>
  );
};

export default HomePage;
