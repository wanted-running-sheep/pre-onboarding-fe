import axios from 'axios';

export const URL = axios.create({
  baseURL: '/data',
  headers: {},
});
