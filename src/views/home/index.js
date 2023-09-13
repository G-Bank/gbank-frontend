import React, { useState, useEffect } from 'react';

// third patry
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// material ui
import Box from '@mui/material/Box';

// project imports
import FloatingMenu from '../../layout/MainLayout/FloatingMenu';
import Loader from '../../ui-component/Loader';
import { Avatar, Button, Grid, Typography } from '@mui/material';
import settingsIcon from '../../assets/images/icons/settings.svg';
import alertIcon from '../../assets/images/icons/alert.svg';
import coinPic from '../../assets/images/coin.png';
import MainCard from '../../ui-component/cards/MainCard';
import { strings } from '../../localizedString';
import TransactionRow from '../../ui-component/TransactionRow';
import MoreOptions from '../../ui-component/MoreOptions';
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import { getAccountById } from '../../api/user';

const HomePage = () => {
  const [wallet, setWallet] = useState(false);

  const account = useSelector((state) => state.account);

  useEffect(() => {
    if (account) {
      // how to fetch my account?
      // what is user id?
      // is this secure?
      // I also need transactions history, and total balance to gold
      // I need persian names and pictures
      getAccountById(3)
        .then(function (response) {
          setWallet(response.data);
        })
        .catch(function (error) {
          console.log('error - ', error);
        });
    }
  }, [account]);

  if (!wallet) {
    return <Loader />;
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Link to="/profile">
          <Avatar />
        </Link>
        <Box display="flex" gap={1}>
          <img alt="alert" src={alertIcon} />
          <img alt="settings" src={settingsIcon} />
        </Box>
      </Box>

      <MainCard title={strings?.wallet}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1} mb={3} width="100%">
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="subtitle2">معادل موجودی شما به طلا</Typography>
            <Typography variant="h2">{getPersianNumber(44494949)}</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <img width={60} height={60} alt="balance" src={coinPic} />
          </Box>
        </Box>

        <TransactionRow title="gold" imageUrl={coinPic} amount={25432003} />
        <TransactionRow title="bitcoin" imageUrl={coinPic} amount={25432003} />
        <MoreOptions />

        <Grid container gap={1} mt={3}>
          <Button variant="contained" color="secondary">
            {strings?.deposite}
          </Button>
          <Button variant="contained" color="secondary">
            {strings?.transfer}
          </Button>
          <Button variant="contained" color="info">
            {strings?.exchange}
          </Button>
        </Grid>
      </MainCard>

      <MainCard title={strings?.transactions}>
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={coinPic} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={coinPic} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={coinPic} amount={25432003} />
        <MoreOptions />
      </MainCard>

      <MainCard title={strings?.exchange}>
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={coinPic} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={coinPic} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={coinPic} amount={25432003} />
        <MoreOptions />
      </MainCard>

      <FloatingMenu />
    </Box>
  );
};

export default HomePage;
