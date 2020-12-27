import axios from 'axios';

const instance = axios.create({
  // TODO: Change baseUrl- connect to api-gateway
  baseURL: '/api',
  headers: {},
});

export default instance;
