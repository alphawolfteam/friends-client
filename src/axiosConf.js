import axios from 'axios';
import config from './appConf';

const apiGatewayInstance = axios.create({
  // TODO: Change baseUrl- connect to api-gateway
  baseURL: config.apiGatewayURI,
  headers: { 'X-User-ID': '' },
});

const configInstance = axios.create({
  // TODO: Change baseUrl- connect to config service
  baseURL: config.configServiceURI,
  headers: {},
});

export default { apiGatewayInstance, configInstance };
