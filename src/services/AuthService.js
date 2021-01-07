// import jwt_decode from 'jwt-decode';
// import Cookies from 'js-cookie';
// import config from '../appConf';

// TODO: Delete
import { currentUser } from './MockData';

class AuthService {
  static async getAuthUser() {
    // const cookie = Cookies.get('friends-token');
    // if (!cookie) {
    //   // TODO: Redirect to auth service
    //   window.location.replace(config.authServiceURI);
    // } else {
    //   return jwt_decode(cookie).user;
    // }
    return currentUser;
  }
}

export default AuthService;
