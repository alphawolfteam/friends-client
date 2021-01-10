import { users } from './MockData';

class UsersService {
  static async searchUsers(searchValue) {
    if (searchValue !== undefined) {
      return users.filter((user) => user.name.lastName.startsWith(searchValue)
        || user.name.firstName.startsWith(searchValue)
        || `${user.name.firstName} ${user.name.lastName}`.startsWith(searchValue));
    }
    return [];
  }
}

export default UsersService;
