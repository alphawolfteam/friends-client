import axios from 'axios';
import config from './appConf';

let apiGatewayInstance;

const createApiGatewayInstance = () => {
  apiGatewayInstance = axios.create({
    baseURL: config.uri.api_gateway_uri,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
};

const configInstance = axios.create({
  baseURL: config.uri.config_service_uri,
  headers: {
    Accept: 'application/json',
  },
});

export { createApiGatewayInstance, apiGatewayInstance, configInstance };
