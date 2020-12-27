// import axiosInstance from '../axiosConf';
// import axios from "axios";

// TODO: Delete
import { users } from './MockData';

// TODO: Error handler
class UsersService {
  static async getPopulatedUsersList(idsList) {
    // TODO: Axios request- Get populated users from api-gateway

    const usersList = await this.searchUsers('');
    return usersList.filter((user) => idsList.includes(user.id));
  }

  static async searchUsers(searchValue) {
    // TODO: Axios request- Get 20 first users by searchValue

    if (searchValue !== undefined) {
      return users.filter((user) => user.name.lastName.startsWith(searchValue)
        || user.name.firstName.startsWith(searchValue)
        || `${user.name.firstName} ${user.name.lastName}`.startsWith(searchValue));
    }
    return [];
  }
}

export default UsersService;
