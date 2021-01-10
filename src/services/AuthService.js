import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../appConf';

class AuthService {
  static async getAuthUser() {
    const cookie = Cookies.get(config.authServiceToken);
    if (!cookie) {
      window.location.replace(config.authServiceURI);
    } else {
      axios.interceptors.request.use((requestsConfig) => {
        requestsConfig.headers.Authorization = `Bearer ${cookie}`;
        return requestsConfig;
      });
      return jwt_decode(cookie).user;
    }
  }
}

export default AuthService;
