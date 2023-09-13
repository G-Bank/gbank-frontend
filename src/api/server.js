import axios from 'axios';
import config from '../config';
import { store } from '../store';

export const get = (endpoint, params) => {
  const token = store.getState().account?.token;
  return axios.get(`${config.API_SERVER}/${endpoint}`, { params, headers: { Authorization: `Token ${token}` } });
};
