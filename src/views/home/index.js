import React from 'react';

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
import MainCard from '../../ui-component/cards/MainCard';
import { strings } from '../../localizedString';
import TransactionRow from '../../ui-component/TransactionRow';
import MoreOptions from '../../ui-component/MoreOptions';
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import { currencyDetails } from '../models/currency';
import images from '../../assets/images';

const HomePage = () => {
  const { user, balances } = useSelector((state) => state.account);

  if (!balances || !user) {
    return <Loader />;
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Link to="/profile">
          <Avatar src={user.picture} />
        </Link>
        <Box display="flex" gap={1}>
          {/* TODO: click on these buttons */}
          <img alt="alert" src={alertIcon} />
          <img alt="settings" src={settingsIcon} />
        </Box>
      </Box>

      <MainCard title={strings?.wallet}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1} mb={3} width="100%">
          <Box display="flex" flexDirection="column" gap={1}>
            {/* TODO: all balance to gold */}
            <Typography variant="subtitle2">معادل موجودی شما به طلا</Typography>
            <Typography variant="h2">{getPersianNumber(44494949)}</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <img width={60} height={60} alt="balance" src={images.gold} />
          </Box>
        </Box>
        {balances.map((balance) => {
          const { title, picture } = currencyDetails[balance.currency];
          return <TransactionRow title={title} imageUrl={picture} amount={balance.value} />;
        })}
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
