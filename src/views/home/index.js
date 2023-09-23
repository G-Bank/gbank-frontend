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
import { icons, images } from '../../assets/images';
import { getExchangeRate } from '../../api/financial';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [allBalance, setAllBalance] = useState(0);

  const { user, balances } = useSelector((state) => state.account);

  const baseCurrency = 'lotf-gold';

  useEffect(() => {
    const loadTotalBalance = async () => {
      if (!balances?.length) {
        setAllBalance(0);
        return;
      }
  
      setLoading(true);
      for (const balance of balances) {
        if (balance.currency === baseCurrency) {
          setAllBalance(ab => ab + balance.amount);
          continue;
        }
  
        if (balance.amount === 0) {
          continue;
        }
  
        const { data: { base, sell, buy } } = await getExchangeRate(balance.currency, baseCurrency);
  
        if (base === balance.currency) {
          console.log(balance.amount, sell, balance.amount / sell);
          setAllBalance(ab => ab + balance.amount / sell);
        } else if (base === baseCurrency) {
          setAllBalance(ab => ab + balance.amount * buy);
        }
      }
      setLoading(false);
    };

    loadTotalBalance();
  }, [balances, baseCurrency]);

  if (!balances || !user || loading) {
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
          <Button variant="contained" color="secondary">
            {strings?.transfer}
          </Button>
          <Link to="/exchange">
            <Button variant="contained" color="info">
              {strings?.exchange}
            </Button>
          </Link>
        </Grid>
      </MainCard>

      <MainCard title={strings?.transactions}>
        {/* TODO: transactions history */}
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={images.gold} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={images.gold} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={images.gold} amount={25432003} />
        <MoreOptions />
      </MainCard>

      <MainCard title={strings?.exchange}>
        {/* TODO: exchange history */}
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={images.gold} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={images.gold} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={images.gold} amount={25432003} />
        <MoreOptions />
      </MainCard>

      <FloatingMenu />
    </Box>
  );
};

export default HomePage;
