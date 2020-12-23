// import axiosInstance from '../axiosConf';
// import axios from "axios";

// TODO: Delete
import { currentUser } from './MockData';

class AuthService {
  static async getAuthUser() {
    // TODO: get current user
    // TODO: get cookie and do jwt convert
    // const { data } = await axios.get('/users/currentUser');
    // return data;

    return currentUser;
  }
}

export default AuthService;
