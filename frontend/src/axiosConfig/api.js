import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  // baseURL: 'https://connections-api.herokuapp.com/',

});

export const setToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  api.defaults.headers.common.Authorization = ``;
};


