import axios from 'axios';
import config from '../appConf';

const headers = {
  Accept: 'application/json',
};

class UsersService {
  static async searchUsers(searchValue) {
    const { data } = await axios.get(`${config.uri.api_gateway_uri}/users`,
      { params: { partialName: searchValue } },
      { ...headers });
    return data;
  }
}

export default UsersService;
