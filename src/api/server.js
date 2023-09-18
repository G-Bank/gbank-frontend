import axios from 'axios';
import config from '../config';
import { store } from '../store';
import { LOGOUT } from '../store/actions';

const logout = () => store.dispatch({ type: LOGOUT });

export const get = async (endpoint, params) => {
  try {
    const token = store.getState().account?.token;
    return await axios.get(`${config.API_SERVER}${endpoint}`, { params, headers: { Authorization: `Token ${token}` } });
  } catch (err) {
    if (err.response.status === 401) {
      logout();
    }
    throw err;
  }
};

export const post = async (endpoint, body, params, contentType) => {
  try {
      const token = store.getState().account?.token;
      return await axios.post(`${config.API_SERVER}${endpoint}`, body, {
        params,
        headers: { Authorization: token && `Token ${token}`, 'Content-type': contentType || 'application/json' }
      });
  } catch (err) {
    if (err.response.status === 401) {
      logout();
    }
    throw err;
  }
};
