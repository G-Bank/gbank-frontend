import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// third party
import axios from 'axios';

// material ui
import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import configData from '../../config';
import MainCard from '../../ui-component/cards/MainCard';
import { strings } from '../../localizedString';
import tether from '../../assets/images/icons/tether.svg';
import rial from '../../assets/images/icons/rial.svg';
import TomanConverter from '../../utils/convertor/TomanConvertor';
import Loader from '../../ui-component/Loader';

// style const
const useStyles = makeStyles((theme) => ({
  cardContent: {
    padding: '16px !important'
  },
  accountContainer: {
    maxHeight: '300px',
    width: '100%',
    overflowY: 'scroll'
  }
}));

const TransferPage = () => {
  const classes = useStyles();
  const [accountWallet, setLimit] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [userOptions, setUserOpts] = useState({
    to_account_id: 2,
    from_account_id: 1,
    amount: 10,
    currency: 'usdt',
    description: ''
  });

  const account = useSelector((state) => state.account);

  function getLimitations() {
    if (account)
      // todo
      // add account id to api
      axios
        .get(configData.API_SERVER + 'transfer/limit?account_id=1', { headers: { Authorization: `Token ${account.token}` } })
        .then(function (response) {
          setLimit(response.data);
        })
        .catch(function (error) {
          console.log('error - ', error);
        });
  }

  function getAccounts() {
    // todo
    // repace api
    if (account)
      axios
        .get('https://randomuser.me/api/?results=10', { headers: { Authorization: `Token ${account.token}` } })
        .then(function (response) {
          setAccounts(response.data.results);
        })
        .catch(function (error) {
          console.log('error - ', error);
        });
  }

  useEffect(getLimitations, [account]);
  useEffect(getAccounts, [account]);

  if (!accountWallet) return <Loader />;
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container gap={3} alignItems={'center'}>
        <Grid item xs={12} sm={5} md={3}>
          <MainCard border={false} elevation={16} content={false}>
            <CardContent className={classes.cardContent}>
              <Grid container direction="column" spacing={0}>
                <Grid item>
                  <Typography variant="h4">{strings?.selectTypeOfTransfer}</Typography>
                </Grid>
                <Grid item sx={{ mt: 5 }}>
                  <Typography variant="subtitle">{strings?.currentWallet}</Typography>
                </Grid>
              </Grid>
              <List component="nav">
                <ListItemButton>
                  <ListItemIcon>
                    <Avatar alt="Tether" src={tether} sx={{ width: 'auto', height: { sm: '100%', xs: 50 } }} />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h5">{accountWallet.limit.usdt}</Typography>} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <Avatar alt="Rial" src={rial} sx={{ width: 'auto', height: { sm: '100%', xs: 50 } }} />
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="h5">{TomanConverter(accountWallet.limit.irr)}</Typography>} />
                </ListItemButton>
              </List>
            </CardContent>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MainCard border={false} elevation={16} content={false}>
            <CardContent className={classes.cardContent}>
              <Grid container direction="column" spacing={0}>
                <Grid item>
                  <Typography variant="h4">{strings?.messageForSelect}</Typography>
                </Grid>
              </Grid>
              <List component="nav" className={classes.accountContainer}>
                {accounts.map((item, value) => (
                  <>
                    <ListItem
                      key={value}
                      secondaryAction={
                        <Radio
                          edge="end"
                          onClick={() => setUserOpts({ ...userOptions, to_account_id: value })}
                          checked={userOptions.to_account_id === value}
                          inputProps={{ 'aria-labelledby': value }}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemAvatar>
                          <Avatar alt={`Avatar n°${value + 1}`} src={item.picture.medium} />
                        </ListItemAvatar>
                        <ListItemText id={value} primary={[item.name.first, item.name.last].join(' ')} />
                      </ListItemButton>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                ))}
              </List>
            </CardContent>
          </MainCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransferPage;
