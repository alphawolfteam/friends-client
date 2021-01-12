import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../appConf';

class AuthService {
  static async getAuthUser() {
    const cookie = Cookies.get(config.auth_service_token);
    // TODO: Delete
    return {
      address: 'רחוב הממתקים 34',
      adfsId: 't23458789@jello.com',
      currentUnit: 'nitro unit',
      dischargeDay: '2022-11-30T22:00:00.000Z',
      displayName: 't23458789@jello.com',
      entityType: 'digimon',
      exp: 1607005903,
      genesisId: '5e5688324203fc40043591aa',
      iat: 1607002303,
      id: 't23458789@jello.com',
      job: 'רוצח',
      jti: '57c79308-5e5e-4205-8d69-c59025dc70fd',
      name: { firstName: 'נייקי', lastName: 'אדידס' },
      phoneNumbers: ['026666998', '052-1234565'],
      photo: null,
      provider: 'Genesis',
      rank: 'mega',
    };
    // eslint-disable-next-line no-unreachable
    if (!cookie) {
      window.location.replace(config.uri.auth_service_uri);
    } else {
      axios.interceptors.request.use((requestsConfig) => {
        requestsConfig.headers.Authorization = `Bearer ${cookie}`;
        return requestsConfig;
      });
      // eslint-disable-next-line no-unreachable
      return jwt_decode(cookie).user;
    }
  }
}

export default AuthService;
