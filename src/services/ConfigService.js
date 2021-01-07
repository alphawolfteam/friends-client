// import axiosInstance from '../axiosConf';
// import axios from "axios";
import config from '../appConf';

class ConfigService {
  static async getConfigVariables() {
    // TODO: Axios request
    // const { data } = await axios.get(`/groups/users/:${userId}`);

    const data = {
      apiGatewayURI: '',
      authServiceURI: '',
      configServiceURI: '',
      authServiceToken: 'friends-token',
      memberRoleValue: 0,
      modifierRoleValue: 1,
      managerRoleValue: 2,
      minGroupNameLength: 2,
      minTagLength: 2,
      minUserSearchValue: 2,
    };
    config.apiGatewayURI = data.apiGatewayURI;
    config.authServiceURI = data.authServiceURI;
    config.configServiceURI = data.configServiceURI;
    config.authServiceToken = data.authServiceToken;
    config.minGroupNameLength = data.minGroupNameLength;
    config.minTagLength = data.minTagLength;
    config.minUserSearchValue = data.minUserSearchValue;
    config.roles[0].value = data.memberRoleValue;
    config.roles[1].value = data.managerRoleValue;
  }
}

export default ConfigService;
