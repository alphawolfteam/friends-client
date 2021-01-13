import axios from 'axios';
import config from '../appConf';

const headers = {
  Accept: 'application/json',
};

class ConfigService {
  static async setConfigVariables() {
    const { data } = await axios.get(
      `${config.uri.config_service_uri}/config`,
      { ...headers },
    );

    config.uri.api_gateway_uri = data.uri.api_gateway_uri;
    config.uri.auth_service_uri = data.uri.auth_service_uri;
    config.length_limitations = { ...data.length_limitations };
    config.token_name = data.token_name;
    config.roles_objects.forEach((roleObject) => {
      switch (roleObject.role) {
        case 'member':
          roleObject.value = data.roles.member_role_value;
          break;
        case 'manager':
          roleObject.value = data.roles.manager_role_value;
          break;
        default:
          break;
      }
    });
  }
}

export default ConfigService;
