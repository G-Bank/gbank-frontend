import React, { useState, useEffect } from 'react';

// third patry
import { useSelector } from 'react-redux';
import axios from 'axios';

// material ui
import Box from '@mui/material/Box';

// project imports
import FloatingMenu from '../../layout/MainLayout/FloatingMenu';
import configData from '../../config';
import Loader from '../../ui-component/Loader';
import { Avatar } from '@mui/material';
import settingsIcon from '../../assets/images/icons/settings.svg';
import alertIcon from '../../assets/images/icons/alert.svg';
import MainCard from '../../ui-component/cards/MainCard';
import { strings } from '../../localizedString';
import TransactionRow from '../../ui-component/TransactionRow';

const HomePage = () => {
  const [wallet, setWallet] = useState(false);

  const account = useSelector((state) => state.account);

  useEffect(() => {
    if (account)
      // todo
      // add account id to api
      // wrong api is called there, replace it later:
      axios
        .get(configData.API_SERVER + 'deposit/limit?account_id=3', { headers: { Authorization: `Token ${account.token}` } })
        .then(function (response) {
          setWallet(response.data);
        })
        .catch(function (error) {
          console.log('error - ', error);
        });
  }, [account]);

  if (!wallet) return <Loader />;
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Avatar />
        <Box display="flex" gap={1}>
          <img alt="alert" src={alertIcon} />
          <img alt="settings" src={settingsIcon} />
        </Box>
      </Box>

      <MainCard title={strings?.wallet}></MainCard>

      <MainCard title={strings?.transactions}>
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={settingsIcon} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={settingsIcon} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={settingsIcon} amount={25432003} />{' '}
      </MainCard>

      <MainCard title={strings?.exchange}>
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={settingsIcon} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={settingsIcon} amount={25432003} />
        <TransactionRow title="alibaba" subtitle="۱۰:۱۲" imageUrl={settingsIcon} amount={25432003} />
      </MainCard>

      <FloatingMenu />
    </Box>
  );
};

export default HomePage;
