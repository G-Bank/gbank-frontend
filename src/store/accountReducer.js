// action - state management
import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT, SET_BANK_CARDS, SET_USER_PROFILE } from './actions';

export const initialState = {
  token: '',
  isLoggedIn: false,
  hasAccount: false,
  user: null,
  balances: [],
  transactions: [],
  cards: [],
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_INITIALIZE: {
      const { balances } = action.payload;
      return {
        ...state,
        balances,
      };
    }
    case SET_USER_PROFILE: {
      const { user } = action.payload;
      return {
        ...state,
        user,
      }
    }
    case SET_BANK_CARDS: {
      const { cards } = action.payload;
      return {
        ...state,
        cards,
      };
    }
    case LOGIN: {
      const { hasAccount, token } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        hasAccount,
        token,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        user: null,
        hasAccount: false
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountReducer;
