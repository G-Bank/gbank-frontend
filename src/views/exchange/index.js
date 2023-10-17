import { useEffect, useMemo, useState } from 'react';

import { Box, Button, Dialog, DialogActions, DialogTitle, Input, TextField, Typography } from '@mui/material';

import BackHeader from '../../ui-component/BackHeader';
import Loader from '../../ui-component/Loader';
import MainCard from '../../ui-component/cards/MainCard';
import { strings } from '../../localizedString';
import { cancelOrder, convertCurrency, getCurrencyList, getExchanges, openExchangeOrder } from '../../api/financial';
import { getPersianNumber } from '../../utils/convertor/TomanConvertor';
import { icons } from '../../assets/images';
import { useSelector } from 'react-redux';
import ExchangeRow from '../../ui-component/ExchangeRow';
import { getUserTransactions } from '../../api/user';
import LimitedList from '../../ui-component/LimitedList';
import CurrencySelection from '../../ui-component/CurrencySelection';

const ExchangePage = () => {
  const [loading, setLoading] = useState(false);
  const [payAmount, setPayAmount] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);
  const [orders, setOrders] = useState([]);
  const [originCurrency, setOriginCurrency] = useState('');
  const [destinationCurrency, setDestinationCurrency] = useState('');
  const [exchangeLoading, setExchangeLoading] = useState(false);
  const [exchange, setExchange] = useState({ amount: 0, rate: 0 });
  const [error, setError] = useState('');
  const [cancelPromot, setCancelPrompt] = useState({ open: false, deletingOrderId: null });

  const { transactions } = useSelector((state) => state.account);

  const exchangeHistory = useMemo(() => transactions.filter((trx) => trx.type === 'exchange'), [transactions]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await fetchCurrencies();
        await fetchHistory();
      } catch (e) {}
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const loadExchangeRate = async () => {
      if (originCurrency && destinationCurrency) {
        setExchangeLoading(true);
        const { amount, rate } = await convertCurrency(originCurrency, destinationCurrency, payAmount);
        setExchange({ amount, rate });
        setExchangeLoading(false);
      }
    };
    loadExchangeRate();
  }, [originCurrency, destinationCurrency, payAmount]);

  const handleSwitch = () => {
    setOriginCurrency(destinationCurrency);
    setDestinationCurrency(originCurrency);
  };

  const fetchHistory = async () => {
    await getUserTransactions();
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

  if (loading || !transactions) {
    return <Loader />;
  }

  return (
    <Box>
      <BackHeader title={strings?.exchange} />

      <MainCard>
        <Typography>{strings?.amountYouPay}</Typography>
        <Box my={2} display="flex" justifyContent="space-between">
          <TextField
            variant="standard"
            type="number"
            value={payAmount}
            placeholder={strings?.stock}
            onChange={(e) => setPayAmount(e.target.value)}
          />
          <CurrencySelection value={originCurrency} currencyList={currencyList} onChange={(e) => setOriginCurrency(e.target.value)} />
        </Box>

        <Box display="flex" justifyContent="space-between" my={3}>
          <img alt="switch" src={icons.switchIcon} onClick={handleSwitch} />
          <Typography style={{ margin: 'auto' }} variant="h3">
            {strings?.exchangeRate} {getPersianNumber(exchange.rate, false)}
          </Typography>
        </Box>

        <Typography>{strings?.amountYouReceive}</Typography>
        <Box my={2} display="flex" justifyContent="space-between">
          <Input readOnly value={getPersianNumber(exchange.amount)} />
          <CurrencySelection
            value={destinationCurrency}
            currencyList={currencyList}
            onChange={(e) => setDestinationCurrency(e.target.value)}
          />
        </Box>

        <Typography my={1} mx="auto" variant="h5" color="error">
          {error}
        </Typography>
        <Button fullWidth disabled={exchangeLoading} variant="contained" color="secondary" onClick={handleSubmit}>
          {strings?.exchange}
        </Button>
      </MainCard>

      <MainCard title={strings?.openOrders}>
        <LimitedList>
          {orders.map((order) => (
            <ExchangeRow
              key={order.id}
              source={order.from_currency}
              destination={order.to_currency}
              amount={order.amount}
              cancelable
              onCancelClick={() => setCancelPrompt({ open: true, deletingOrderId: order.id })}
            />
          ))}
        </LimitedList>
      </MainCard>

      <MainCard title={strings?.transactions}>
        <LimitedList>
          {exchangeHistory.map((trx, index) => (
            <ExchangeRow key={index} {...trx} />
          ))}
        </LimitedList>
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
