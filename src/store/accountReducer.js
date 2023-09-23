// action - state management
import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT, SET_BANK_CARDS, SET_TRANSACTIONS, SET_USER_PICTURE, SET_USER_PROFILE } from './actions';

export const initialState = {
  token: '',
  isLoggedIn: false,
  hasAccount: false,
  user: null,
  balances: [],
  transactions: [],
  cards: [],
  accountId: null
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_INITIALIZE: {
      const { account } = action.payload;
      return {
        ...state,
        balances: account.balances,
        accountId: account.id
      };
    }
    case SET_USER_PICTURE: {
      const { picture } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          picture
        }
      };
    }
    case SET_USER_PROFILE: {
      const { user } = action.payload;
      return {
        ...state,
        user
      };
    }
    case SET_BANK_CARDS: {
      const { cards } = action.payload;
      return {
        ...state,
        cards
      };
    }
    case SET_TRANSACTIONS: {
      const { transactions } = action.payload;
      return {
        ...state,
        transactions
      };
    }
    case LOGIN: {
      const { hasAccount, token } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        hasAccount,
        token
      };
    }
    case LOGOUT: {
      return {
        ...initialState
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountReducer;
