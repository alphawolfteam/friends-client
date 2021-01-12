import { configInstance } from '../axiosConf';
import config from '../appConf';

class ConfigService {
  static async setConfigVariables() {
    const { data } = await configInstance.get('/config');
    config.uri.api_gateway_uri = data.uri.api_gateway_uri;
    config.uri.auth_service_uri = data.uri.auth_service_uri;
    config.length_limitations = { ...data.length_limitations };
    config.auth_service_token = data.auth_service_token;
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
