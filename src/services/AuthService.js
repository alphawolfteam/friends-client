import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../appConf';

class AuthService {
  static async getAuthUser() {
    // TODO: Delete
    Cookies.set(config.auth_service_token, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmVzaXNJZCI6IjVlNTY4ODMyNDIwM2ZjNDAwNDM1OTFhYSIsIm5hbWUiOnsiZmlyc3ROYW1lIjoi16DXmdeZ16fXmSIsImxhc3ROYW1lIjoi15DXk9eZ15PXoSJ9fX0.DhuELvSYvucb8mf9kARPxS9jnqPdmx6THFLfNwTDX5w');
    const cookie = Cookies.get(config.auth_service_token);
    if (!cookie) {
      window.location.replace(config.uri.auth_service_uri);
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
