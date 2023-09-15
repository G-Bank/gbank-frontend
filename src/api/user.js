import { store } from "../store";
import { ACCOUNT_INITIALIZE, LOGIN, SET_BANK_CARDS, SET_USER_PROFILE } from "../store/actions";
import { get, post } from "./server";

export const getOTP = (phoneNumber) => post('login/', { phone_number: phoneNumber });

export const loginUser = async (phoneNumber, otp) => {
  const response = await post('verify/', { phone_number: phoneNumber, otp });
  store.dispatch({
    type: LOGIN,
    payload: { token: response.data.token, hasAccount: true }
  });
  getUserAccount();
  getUserProfile();
  getUserBankCards();
};

export const getUserAccount = async () => {
  const response = await get('account/');
  store.dispatch({
    type: ACCOUNT_INITIALIZE,
    // TODO: choose current account
    payload: { balances: response.data.accounts[0].balances },
  });
};

export const getUserProfile = async () => {
  const response = await get('user/profile/');
  store.dispatch({
    type: SET_USER_PROFILE,
    payload: { user: { ...response.data.user, ...response.data.profile } },
  })
};

export const getUserBankCards = async () => {
  const response = await get('bank-card/');
  store.dispatch({
    type: SET_BANK_CARDS,
    payload: { cards: response.data.bank_cards },
  });
};
