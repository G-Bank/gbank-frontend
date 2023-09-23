import { useEffect, useMemo, useState } from 'react';

import { Box, Button, Dialog, DialogActions, DialogTitle, Input, MenuItem, Select, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

import BackHeader from '../../ui-component/BackHeader';
import Loader from '../../ui-component/Loader';
import MainCard from '../../ui-component/cards/MainCard';
import { strings } from '../../localizedString';
import { cancelOrder, getCurrencyList, getExchangeRate, getExchanges, openExchangeOrder } from '../../api/financial';
import { getPersianNumber, numberWithCommas } from '../../utils/convertor/TomanConvertor';
import { icons } from '../../assets/images';
import { currencyDetails } from '../models/currency';
import MoreOptions from '../../ui-component/MoreOptions';

const useStyles = makeStyles(() => ({
  cancelButton: {
    width: 20,
    height: 20,
    padding: 4,
    borderRadius: 4,
    background: '#D4D3FF'
  },
  fromPicture: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 0,
    left: 0
  },
  toPicture: {
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: 0,
    right: 0
  }
}));

const ExchangePage = () => {
  const styles = useStyles();

  const [loading, setLoading] = useState(false);
  const [payAmount, setPayAmount] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);
  const [orders, setOrders] = useState([]);
  const [originCurrency, setOriginCurrency] = useState('');
  const [destinationCurrency, setDestinationCurrency] = useState('');
  const [exchangeLoading, setExchangeLoading] = useState(false);
  const [exchange, setExchange] = useState(1);
  const [error, setError] = useState('');
  const [cancelPromot, setCancelPrompt] = useState({ open: false, deletingOrderId: null });

  const { openOrders, closedOrders } = useMemo(() => {
    const opens = [];
    const closed = [];

    orders.forEach((order) => {
      if (order.closed_at) {
        closed.push(order);
      } else {
        opens.push(order);
      }
    });
    return { openOrders: opens, closedOrders: closed };
  }, [orders]);

  const receivingAmount = useMemo(() => {
    if (!exchange) {
      return 0;
    }

    const { base, buy, sell } = exchange;

    if (base === originCurrency) {
      return payAmount / sell;
    } else if (base === destinationCurrency) {
      return payAmount * buy;
    }

    return 0;
  }, [payAmount, exchange, originCurrency, destinationCurrency]);

  const exchangeRate = useMemo(() => {
    if (!exchange) {
      return 0;
    }
    const { base, buy, sell } = exchange;

    if (base === originCurrency) {
      return sell;
    } else if (base === destinationCurrency) {
      return buy;
    }
  }, [exchange, originCurrency, destinationCurrency]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchCurrencies();
      await fetchHistory();
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (originCurrency && destinationCurrency) {
      setExchangeLoading(true);
      getExchangeRate(originCurrency, destinationCurrency)
        .then((response) => {
          setExchange(response.data);
          setExchangeLoading(false);
        })
        .catch(() => setExchangeLoading(false));
    }
  }, [originCurrency, destinationCurrency]);

  const handleSwitch = () => {
    setOriginCurrency(destinationCurrency);
    setDestinationCurrency(originCurrency);
  };

  const fetchHistory = async () => {
    const { data } = await getExchanges();
    setOrders(data.orders);
  };

  const fetchCurrencies = async () => {
    const { data } = await getCurrencyList();
    const currencies = data.currencies;
    setCurrencyList(currencies);
    setOriginCurrency(currencies[0]);
    setDestinationCurrency(currencies[1]);
  };

  const handleSubmit = () => {
    setLoading(true);
    openExchangeOrder(originCurrency, destinationCurrency, payAmount)
      .then(async () => {
        await fetchHistory();
        setLoading(false);
      })
      .catch((err) => {
        const code = err.response.data.code;

        if (code === 'otc-02') {
          setError(strings?.notEnoughBalance);
        }
        setLoading(false);
      });
  };

  const handleCloseCancelPrompt = () => setCancelPrompt({ open: false, deletingOrderId: null });

  const handleCancelOrder = (orderId) => {
    setLoading(true);
    cancelOrder(orderId)
      .then(async () => {
        await fetchHistory();
        setLoading(false);
        handleCloseCancelPrompt();
      })
      .catch(() => setLoading(false));
  };

  const renderSelect = (value, onChange) => (
    <Select value={value} onChange={onChange}>
      {currencyList.map((currency) => {
        const { title, picture } = currencyDetails[currency];

        return (
          <MenuItem key={currency} value={currency}>
            <Box width="100%" gap={1} display="flex" justifyContent="space-between">
              <Typography>{title}</Typography>
              <img width={24} height={24} alt={currency} src={picture} />
            </Box>
          </MenuItem>
        );
      })}
    </Select>
  );

  const renderTransactionRow = (order) => {
    const { picture: fromPicture } = currencyDetails[order.from_currency];
    const { picture: toPicture } = currencyDetails[order.to_currency];

    return (
      <Box key={order.id}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>{strings?.receivingAmount}</Typography>
            <Typography variant="h5">
              {numberWithCommas(order.amount)} {order.to_currency}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h4">
              {order.from_currency} to {order.to_currency}
            </Typography>
            <Box position="relative" width={32} height={28}>
              <img className={styles.fromPicture} alt={order.from_currency} src={fromPicture} />
              <img className={styles.toPicture} alt={order.to_currency} src={toPicture} />
            </Box>
          </Box>
        </Box>
        {!order.closed_at && (
          <Box
            display="flex"
            justifyContent="flex-end"
            gap={1}
            mt={1}
            pl={1}
            onClick={() => setCancelPrompt({ open: true, deletingOrderId: order.id })}
          >
            <Typography>{strings?.cancel}</Typography>
            <Close className={styles.cancelButton} />
          </Box>
        )}
      </Box>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <BackHeader title={strings?.exchange} />

      <MainCard>
        <Typography>{strings?.amountYouPay}</Typography>
        <Box my={2} display="flex" justifyContent="space-between">
          <Input value={payAmount} placeholder={strings?.stock} onChange={(e) => setPayAmount(e.target.value)} />
          {renderSelect(originCurrency, (e) => setOriginCurrency(e.target.value))}
        </Box>

        <Box display="flex" justifyContent="space-between" my={3}>
          <img alt="switch" src={icons.switchIcon} onClick={handleSwitch} />
          <Typography style={{ margin: 'auto' }} variant="h3">
            {strings?.exchangeRate} {getPersianNumber(exchangeRate, false)}
          </Typography>
        </Box>

        <Typography>{strings?.amountYouReceive}</Typography>
        <Box my={2} display="flex" justifyContent="space-between">
          <Input readOnly value={getPersianNumber(receivingAmount)} />
          {renderSelect(destinationCurrency, (e) => setDestinationCurrency(e.target.value))}
        </Box>

        <Typography my={1} mx="auto" variant="h5" color="error">
          {error}
        </Typography>
        <Button fullWidth disabled={exchangeLoading} variant="contained" color="secondary" onClick={handleSubmit}>
          {strings?.exchange}
        </Button>
      </MainCard>

      <MainCard title={strings?.openOrders}>
        {openOrders.map((order) => renderTransactionRow(order))}
        <MoreOptions />
      </MainCard>

      <MainCard title={strings?.transactions}>
        {closedOrders.map((order) => renderTransactionRow(order))}
        <MoreOptions />
      </MainCard>

      <Dialog open={cancelPromot.open} onClose={handleCloseCancelPrompt}>
        <DialogTitle>{strings?.areYouSure}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseCancelPrompt}>{strings?.no}</Button>
          <Button onClick={() => handleCancelOrder(cancelPromot.deletingOrderId)}>{strings?.yes}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ExchangePage;
