import axios from 'axios';
import config from '../appConf';

class UsersService {
  static async searchUsers(searchValue) {
    const { data } = await axios.get(`${config.uri.api_gateway_uri}api/users`,
      { params: { partialName: searchValue } },
      { Accept: 'application/json' });
    return data;
  }
}

export default UsersService;
