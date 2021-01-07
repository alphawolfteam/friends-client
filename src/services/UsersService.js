// import { apiGatewayInstance } from '../axiosConf';

// TODO: Delete
import { users } from './MockData';

// TODO: Error handler
class UsersService {
  static async searchUsers(searchValue) {
    // TODO: Axios request
    // const { data } = await apiGatewayInstance.get(`/users`,
    // { params: { partialName : searchValue } });
    // return data;

    if (searchValue !== undefined) {
      return users.filter((user) => user.name.lastName.startsWith(searchValue)
        || user.name.firstName.startsWith(searchValue)
        || `${user.name.firstName} ${user.name.lastName}`.startsWith(searchValue));
    }
    return [];
  }
}

export default UsersService;
