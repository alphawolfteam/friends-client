import jwt_decode from 'jwt-decode';

class AuthService {
  static async getAuthUser() {
    const { cookie } = document;
    if (!cookie) {
      // TODO: Delete
      document.cookie = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExMTEiLCJuYW1lIjp7ImZpcnN0TmFtZSI6Iteg15nXmden15kiLCJsYXN0TmFtZSI6IteQ15PXmdeT16EifX0.a6Lpfk8ssaHQtBFxmnyR3iVPL_2hGNuc22670pEa4h8';
      // TODO: Redirect to auth service
      window.location.replace('/');
    } else {
      return jwt_decode(document.cookie);
    }
  }
}

export default AuthService;
