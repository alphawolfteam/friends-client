import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../appConf';

class AuthService {
  static async getAuthUser() {
    const cookie = Cookies.get(config.token_name);
    if (!cookie) {
      window.location.replace(`${config.uri.auth_service_uri}api/login`);
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
