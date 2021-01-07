// import jwt_decode from 'jwt-decode';
// import Cookies from 'js-cookie';
// import config from '../appConf';
// import axios from 'axios';

// TODO: Delete
import { currentUser } from './MockData';

class AuthService {
  static async getAuthUser() {
    // const cookie = Cookies.get(config.authServiceToken);
    // if (!cookie) {
    //   // TODO: Redirect to auth service
    //   window.location.replace(config.authServiceURI);
    // } else {
    //   axios.interceptors.request.use((requestsConfig) => {
    //     requestsConfig.headers.Authorization = `Bearer ${cookie}`;
    //     return requestsConfig;
    //   });
    //   return jwt_decode(cookie).user;
    // }
    return currentUser;
  }
}

export default AuthService;
