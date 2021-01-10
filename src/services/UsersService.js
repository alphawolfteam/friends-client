import { apiGatewayInstance } from '../axiosConf';

class UsersService {
  static async searchUsers(searchValue) {
    const { data } = await apiGatewayInstance.get('/users',
      { params: { partialName: searchValue } });
    return data;
  }
}

export default UsersService;
