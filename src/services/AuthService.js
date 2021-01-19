import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../appConf';

class AuthService {
  static async getAuthUser() {
    const token = Cookies.get(config.token_name);
    if (!token) {
      this.redirect();
    } else {
      axios.interceptors.request.use((requestsConfig) => {
        requestsConfig.headers.Authorization = `Bearer ${token}`;
        return requestsConfig;
      });
      return jwt.decode(token).user;
    }
  }

  static async redirect() {
    window.location.replace(`${config.uri.auth_service_uri}auth/login`);
  }
}

export default AuthService;
