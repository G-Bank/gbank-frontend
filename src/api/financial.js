import { store } from '../store';
import { get, post } from './server';

export const getCurrencyList = () => get('currency/');

export const getExchangeRate = (from, to) => get('exchange/rate/', { currency1: from, currency2: to });

export const openExchangeOrder = (from, to, amount) =>
  post('crypto/exchange/', { account_id: store.getState().account.accountId, from_currency: from, to_currency: to, amount });

export const getExchanges = () => get('crypto/exchange/');

let lastRate = {
  symbol: null,
  base: null,
  sell: null,
  buy: null
};
export const convertCurrency = async (from, to, amount) => {
  if (from === to) {
    return { amount, rate: 1 };
  }

  if (lastRate.from !== from && lastRate.to !== to) {
    try {
      const { data } = await getExchangeRate(from, to);
      lastRate = data;
      lastRate.from = from;
      lastRate.to = to;
    } catch (e) {
      return { amount: 0, rate: 0 };
    }
  }

  let result = { amount: 0, rate: 0 };
  const { base, sell, buy } = lastRate;
  if (base === from) {
    result = { amount: amount / sell, rate: sell };
  } else if (base === to) {
    result = { amount: amount * buy, rate: buy };
  }

  return result;
};

export const cancelOrder = (orderId) => post('crypto/exchange/cancel/', { order_id: orderId });

export const transferRequest = (from, toPhoneNumber, amount, currency, description) =>
  post('transfer/', { to_phone_number: toPhoneNumber, from_account_id: from, amount, currency, description });

export const getFrequentTransfers = () => get('transfer/frequent/');

export const getTransactionFee = (accountId, amount, currency, transactionType = 'transfer') =>
  get('transaction/fee/', { amount, currency, transaction_type: transactionType, account_id: accountId });

export const getUserPaymentRequests = () => get('payment-request/');

export const createPaymentRequest = (fromPhoneNumber, account, amount, currency, description) =>
  post('payment-request/', { from_user: fromPhoneNumber, account, amount, currency, description });

export const depositRequest = (account, amount, currency) => post('deposit/request/', { account_id: account, amount, currency });

export const getEquivalentProperty = (accountId) => get('equivalent-property/', { account_id: accountId });

export const depositCallback = (trackId, success, status) => get('ipg/callback', { trackId, success, status });
