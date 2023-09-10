import React, { useState, useEffect } from 'react';

// third patry
import { useSelector } from 'react-redux';
import axios from 'axios';

// material ui
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import FloatingMenu from '../../layout/MainLayout/FloatingMenu';
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
      <FloatingMenu />
    </Box>
  );
};

export default HomePage;
