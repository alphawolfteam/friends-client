// import axiosInstance from '../axiosConf';
// import axios from "axios";

class UsersService {
  static async getAuthUser() {
    // TODO: get current user
    // const { data } = await axios.get('/users/currentUser');

    // return data;
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
      id: '1111',
      job: 'רוצח',
      jti: '57c79308-5e5e-4205-8d69-c59025dc70fd',
      name: { firstName: 'נייקי', lastName: 'אדידס' },
      phoneNumbers: ['026666998', '052-1234565'],
      photo: null,
      provider: 'Genesis',
      rank: 'mega',
    };
  }

  static async getUsersList() {
    // TODO: Get users

    return [
      {
        id: '1111',
        name: { firstName: 'נייקי', lastName: 'אדידס' },
        description: 'קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235',
      },
      {
        id: '2222',
        name: { firstName: 'ישראל', lastName: 'ישראלי' },
        description: 'קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235',
      },
      {
        id: '3333',
        name: { firstName: 'חיים', lastName: 'כהן' },
        description: 'קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235',
      },
      {
        id: '4444',
        name: { firstName: 'עומר', lastName: 'אדם' },
        description: 'קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235',
      },
      {
        id: '5555',
        name: { firstName: 'איציק', lastName: 'כהן' },
        description: 'קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235',
      },
      {
        id: '6666',
        name: { firstName: 'ישראל', lastName: 'אהרוני' },
        description: 'קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235',
      },
    ];
  }
}

//   static async getUsersListByValue(searchValue) {
//     // TODO: Get users

//     return [
//       {
//         id: "1111",
//         name: { firstName: "נייקי", lastName: "אדידס" },
//         description: "קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235",
//       },
//       {
//         id: "2222",
//         name: { firstName: "ישראל", lastName: "ישראלי" },
//         description: "קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235",
//       },
//       {
//         id: "3333",
//         name: { firstName: "חיים", lastName: "כהן" },
//         description: "קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235",
//       },
//       {
//         id: "4444",
//         name: { firstName: "עומר", lastName: "אדם" },
//         description: "קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235",
//       },
//       {
//         id: "5555",
//         name: { firstName: "איציק", lastName: "כהן" },
//         description: "קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235",
//       },
//       {
//         id: "6666",
//         name: { firstName: "ישראל", lastName: "אהרוני" },
//         description: "קמנר/ספיר/מטה/יסודות/צוות אלפא T33245235",
//       },
//     ].filter(user => user.firstName.startsWith(searchValue) ||
// user.lastName.startsWith(searchValue) ||
// `${user.firstName} ${user.lastName}`.startsWith(searchValue));
//   }
// }

export default UsersService;
