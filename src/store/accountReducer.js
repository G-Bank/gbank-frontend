// action - state management
import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT } from './actions';

export const initialState = {
  token: '',
  isLoggedIn: false,
  isInitialized: false,
  hasAccount: false,
  user: null
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_INITIALIZE: {
      const { isLoggedIn, user, token, hasAccount = false } = action.payload;
      return {
        ...state,
        isLoggedIn,
        isInitialized: true,
        token,
        user,
        hasAccount
      };
    }
    case LOGIN: {
      // todo - must be changed later: add hasAccount
      const { user } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        user,
        hasAccount: false // todo - must be changed later
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
