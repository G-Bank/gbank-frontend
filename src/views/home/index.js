import React, { useState, useEffect } from 'react';

// third patry
import { useSelector } from 'react-redux';
import axios from 'axios';

// material ui
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import { strings } from '../../localizedString';
import Crypto from './tabs/Crypto';
import Rial from './tabs/Rial';
import Convert from './tabs/Convert';
import configData from '../../config';
import Loader from '../../ui-component/Loader';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const HomePage = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  if (!wallet) return <Loader />;
  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static" sx={{ boxShadow: 'none !important' }}>
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs"
        >
          <Tab label={strings?.crypto} {...a11yProps(0)} />
          <Tab label={strings?.rial} {...a11yProps(1)} />
          <Tab label={strings?.convert} {...a11yProps(2)} disabled />
        </Tabs>
      </AppBar>
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Crypto wallet={wallet.limit.tether} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Rial wallet={wallet.limit.toman} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Convert />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default HomePage;
