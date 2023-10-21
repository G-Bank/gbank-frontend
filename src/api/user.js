import { store } from '../store';
import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT, SET_BANK_CARDS, SET_TRANSACTIONS, SET_USER_PICTURE, SET_USER_PROFILE } from '../store/actions';
import { get, post } from './server';

export const getOTP = (phoneNumber) => post('login/', { phone_number: phoneNumber });

export const loginUser = async (phoneNumber, otp) => {
  const response = await post('verify/', { phone_number: phoneNumber, otp });
  store.dispatch({
    type: LOGIN,
    payload: { token: response.data.token, hasAccount: true }
  });
};

export const logoutUser = async () => {
  await post('logout/');
  store.dispatch({ type: LOGOUT });
};

export const getUserAccount = async () => {
  const response = await get('account/');
  store.dispatch({
    type: ACCOUNT_INITIALIZE,
    // TODO: choose current account
    payload: { account: response.data.accounts[0] }
  });
};

export const getUserProfile = async () => {
  const response = await get('user/profile/');
  store.dispatch({
    type: SET_USER_PROFILE,
    payload: { user: { ...response.data.user, ...response.data.profile } }
  });
};

export const setUserProfile = async (profile) => {
  const response = await post('user/profile/', profile);
  store.dispatch({
    type: SET_USER_PROFILE,
    payload: { user: { ...response.data.user, ...response.data.profile } }
  });
};

export const registerNationalCode = () => post('kyc/national_code/');

export const setUserProfilePicture = async (data) => {
  const response = await post('user/picture/', data, null, 'multipart/form-data');
  store.dispatch({
    type: SET_USER_PICTURE,
    payload: { picture: response.data.picture }
  });
};

export const getUserBankCards = async () => {
  const response = await get('bank-card/');
  store.dispatch({
    type: SET_BANK_CARDS,
    payload: { cards: response.data.bank_cards }
  });
};

export const addNewBankCard = async (cardNumber) => {
  await post('bank-card/', { card_number: cardNumber });
  await getUserBankCards();
};

export const getMaxWithdrawLimit = (accountId, currency) => get('withdraw/limit/', { account_id: accountId, currency });

export const getMaxDepositLimit = (accountId, currency) => get('deposit/limit/', { account_id: accountId, currency });

export const getMaxLimits = async (accountId, currency) => {
  const { data: { limit: withdraw } } = await getMaxWithdrawLimit(accountId, currency);
  const { data: { limit: deposit } } = await getMaxDepositLimit(accountId, currency);

  return { withdraw, deposit };
};

export const getUserTransactions = async () => {
  const response = await get('transactions/');
  store.dispatch({
    type: SET_TRANSACTIONS,
    payload: { transactions: response.data.transactions }
  });
};

export const getUserTiers = () => get('tiers/');
