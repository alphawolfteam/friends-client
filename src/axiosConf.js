import axios from 'axios';

const instance = axios.create({
  // TODO: Change baseUrl
  baseURL: '/api',
  headers: {},
});

export default instance;
