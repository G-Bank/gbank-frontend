import { store } from '../store';
import { get, post } from './server';

export const getCurrencyList = () => get('currency/');

export const openExchangeOrder = (from, to, amount) =>
  post('crypto/exchange/', { account_id: store.getState().account.accountId, from_currency: from, to_currency: to, amount });

export const getExchanges = () => get('crypto/exchange/');

export const cancelOrder = (orderId) => post('crypto/exchange/cancel/', { order_id: orderId });
