// import axiosInstance from '../axiosConf';
// import axios from "axios";

class UsersService {
  static async getFilteredUsersList(searchValue) {
    // TODO: Get 20 first users by searchValue
    if (searchValue) {
      console.log();
    }
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

export default UsersService;
