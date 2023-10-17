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
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import { currencyDetails } from '../models/currency';
import { icons } from '../../assets/images';
import { getEquivalentProperty } from '../../api/financial';
import { useMemo } from 'react';
import ExchangeRow from '../../ui-component/ExchangeRow';
import LimitedList from '../../ui-component/LimitedList';
import { getUserAccount, getUserBankCards, getUserProfile, getUserTransactions } from '../../api/user';
import config from '../../config';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [equivalentProperty, setEquivalentProperty] = useState(0);

  const { user, balances, transactions, accountId } = useSelector((state) => state.account);

  const exchangeHistory = useMemo(() => transactions.filter((trx) => trx.type === 'exchange'), [transactions]);

  const transferHistory = useMemo(() => transactions.filter((trx) => trx.type === 'transfer'), [transactions]);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      await getUserAccount();
      await getUserProfile();
      await getUserBankCards();
      await getUserTransactions();
      
      const { data } = await getEquivalentProperty(accountId);
      setEquivalentProperty(data);

      setLoading(false);
    };
    fetchUserData();
  }, [accountId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Link to="/profile">
          <Avatar alt={user.firstname} src={user.picture} />
        </Link>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="h5">V {config.appVersion}</Typography>
          {/* TODO: click on these buttons */}
          <img alt="alert" src={icons.alertIcon} />
          <img alt="settings" src={icons.settingsIcon} />
        </Box>
      </Box>

      <MainCard title={strings?.wallet}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1} mb={3} width="100%">
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="subtitle2">معادل موجودی شما به {currencyDetails[equivalentProperty?.currency]?.title}</Typography>
            <Typography variant="h2">{getPersianNumber(equivalentProperty?.total)}</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <img width={60} height={60} alt="balance" src={currencyDetails[equivalentProperty?.currency]?.picture} />
          </Box>
        </Box>
        <LimitedList>
          {balances.map((balance) => {
            const { title, picture } = currencyDetails[balance.currency];
            return <TransactionRow key={title} title={title} imageUrl={picture} amount={balance.amount} />;
          })}
        </LimitedList>

        <Grid container gap={1} mt={3}>
          <Link to="/deposit">
            <Button variant="contained" color="secondary">
              {strings?.deposit}
            </Button>
          </Link>
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

      <Box width="100%" px={2}>
        <Link to="/payment-request">
          <Button fullWidth variant="contained" color="primary">
            {strings?.paymentRequest}
          </Button>
        </Link>
      </Box>

      <MainCard title={strings?.transactions}>
        {/* TODO: tranactions date */}
        {/* TODO: receiver info */}
        <LimitedList>
          {transferHistory.map((trx, index) => {
            const { title, picture } = currencyDetails[trx.currency];
            return (
              <TransactionRow key={index} title={trx.destination} subtitle="۱۰:۱۲" imageUrl={picture} amount={trx.amount} unit={title} />
            );
          })}
        </LimitedList>
      </MainCard>

      <MainCard title={strings?.exchange}>
        <LimitedList>
          {exchangeHistory.map((trx, index) => (
            <ExchangeRow key={index} {...trx} />
          ))}
        </LimitedList>
      </MainCard>

      <FloatingMenu />
    </Box>
  );
};

export default HomePage;
