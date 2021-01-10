import { currentUser } from './MockData';

class AuthService {
  static async getAuthUser() {
    return currentUser;
  }
}

export default AuthService;
