// import axiosInstance from '../axiosConf';
// import axios from "axios";

class UsersService {
  static async getAuthUser() {
    // TODO: get current user
    // const { data } = await axios.get('/currentUser');

    // return data;
    return {
      address: "רחוב הממתקים 34",
      adfsId: "t23458789@jello.com",
      currentUnit: "nitro unit",
      dischargeDay: "2022-11-30T22:00:00.000Z",
      displayName: "t23458789@jello.com",
      entityType: "digimon",
      exp: 1607005903,
      genesisId: "5e5688324203fc40043591aa",
      iat: 1607002303,
      id: "5e5688324203fc40043591aa",
      job: "רוצח",
      jti: "57c79308-5e5e-4205-8d69-c59025dc70fd",
      name: { firstName: "נייקי", lastName: "אדידס" },
      phoneNumbers: ["026666998", "052-1234565"],
      photo: null,
      provider: "Genesis",
      rank: "mega",
    };
  }
}

export default UsersService;
