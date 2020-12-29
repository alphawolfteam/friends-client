// import axiosInstance from '../axiosConf';
// import axios from "axios";

// TODO: Delete
import { currentUser } from './MockData';

class AuthService {
  // eslint-disable-next-line consistent-return
  static async getAuthUser() {
    // TODO: get current user
    // const { data } = await axios.get('/users/currentUser');
    // return data;

    // const { cookie } = document;
    // if (!cookie) {
    //   // window.location.replace('');
    document.cookie = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTEiLCJuYW1lIjp7ImZpcnN0TmFtZSI6Iteg15nXmden15kiLCJsYXN0TmFtZSI6IteQ15PXmdeT16EifX0.a6Lpfk8ssaHQtBFxmnyR3iVPL_2hGNuc22670pEa4h8';
    // } else {
    //   return JSON.parse(atob(cookie.split('.')[1]));
    // }
    return currentUser;
  }
}

export default AuthService;
