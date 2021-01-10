import axios from 'axios';
import config from './appConf';

const apiGatewayInstance = axios.create({
  baseURL: config.apiGatewayURI,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const configInstance = axios.create({
  baseURL: config.configServiceURI,
  headers: {
    Accept: 'application/json',
  },
});

export default { apiGatewayInstance, configInstance };
