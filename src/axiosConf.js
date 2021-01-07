import axios from 'axios';
import config from './appConf';

const apiGatewayInstance = axios.create({
  baseURL: config.apiGatewayURI,
  headers: {},
});

const configInstance = axios.create({
  baseURL: config.configServiceURI,
  headers: {},
});

export default { apiGatewayInstance, configInstance };
