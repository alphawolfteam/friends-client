// import axiosInstance from '../axiosConf';
// import axios from "axios";

// TODO: Delete
import { users } from './MockData';

class UsersService {
  static async getPopulatedUsersList(idsList) {
    // TODO: get populated users from api-gateway

    const usersList = await this.getFilteredUsersList('');
    return usersList.filter((user) => idsList.includes(user.id));
  }

  static async getFilteredUsersList(searchValue) {
    // TODO: Get 20 first users by searchValue

    if (searchValue !== undefined) {
      return users.filter((user) => user.name.lastName.startsWith(searchValue)
        || user.name.firstName.startsWith(searchValue)
        || `${user.name.firstName} ${user.name.lastName}`.startsWith(searchValue));
    }
    return [];
  }
}

export default UsersService;
