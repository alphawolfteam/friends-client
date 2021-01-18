import axios from 'axios';
import config from '../appConf';

const headers = {
  Accept: 'application/json',
};

class ConfigService {
  static async setConfigVariables() {
    const { data } = await axios.get(
      `${config.uri.config_service_uri}config`,
      { ...headers },
    );
    config.uri.api_gateway_uri = data.uri.api_gateway_uri;
    config.uri.auth_service_uri = data.uri.auth_service_uri;
    config.length_limitations = { ...data.length_limitations };
    config.roles = { ...data.roles };
    config.token_name = data.token_name;
  }
}

export default ConfigService;
