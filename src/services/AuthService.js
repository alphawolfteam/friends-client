// import axiosInstance from '../axiosConf';
// import axios from "axios";
// import jwt from 'jwt-simple';

import { currentUser } from './MockData';

class AuthService {
  // eslint-disable-next-line consistent-return
  static async getAuthUser() {
    // const { cookie } = document;
    // if (!cookie) {
    //   console.log(jwt.decode(document.cookie));
    document.cookie = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTEiLCJuYW1lIjp7ImZpcnN0TmFtZSI6Iteg15nXmden15kiLCJsYXN0TmFtZSI6IteQ15PXmdeT16EifX0.a6Lpfk8ssaHQtBFxmnyR3iVPL_2hGNuc22670pEa4h8';
    //   // TODO: Redirect to auth service
    //   // window.location.replace('http://localhost:3000/');
    // } else {
    //   return jwt.decode(cookie);
    // }
    return currentUser;
  }
}

export default AuthService;
