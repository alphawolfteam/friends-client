import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

class AuthService {
  static async getAuthUser() {
    const cookie = Cookies.get('friends-token');
    if (!cookie) {
      // TODO: Delete
      // document.cookie = '';
      // TODO: Redirect to auth service
      window.location.replace('https://localhost:3002/api/login');
    } else {
      return jwt_decode(cookie).user;
    }
  }
}

export default AuthService;
