import axios from 'axios';
import config from '../config';
import { store } from '../store';

export const get = (endpoint, params) => {
  const token = store.getState().account?.token;
  return axios.get(`${config.API_SERVER}${endpoint}`, { params, headers: { Authorization: `Token ${token}` } });
};

export const post = (endpoint, body, params, contentType) => {
  const token = store.getState().account?.token;
  return axios.post(`${config.API_SERVER}${endpoint}`, body, {
    params,
    headers: { Authorization: token && `Token ${token}`, 'Content-type': contentType || 'application/json' }
  });
};
