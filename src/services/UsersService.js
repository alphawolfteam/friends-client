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
        fullName: 'נייקי אדידס',
        name: { firstName: 'נייקי', lastName: 'אדידס' },
        hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
      },
      {
        id: '2222',
        fullName: 'ישראל ישראלי',
        name: { firstName: 'ישראל', lastName: 'ישראלי' },
        hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
      },
      {
        id: '3333',
        fullName: 'חיים כהן',
        name: { firstName: 'חיים', lastName: 'כהן' },
        hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
      },
      {
        id: '4444',
        fullName: 'עומר אדם',
        name: { firstName: 'עומר', lastName: 'אדם' },
        hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
      },
      {
        id: '5555',
        fullName: 'איציק כהן',
        name: { firstName: 'איציק', lastName: 'כהן' },
        hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
      },
      {
        id: '6666',
        fullName: 'ישראל אהרוני',
        name: { firstName: 'ישראל', lastName: 'אהרוני' },
        hierarchyFlat: 'קמנר/ספיר/מטה/יסודות/צוות אלפא',
      },
    ].filter((user) => user.name.lastName.startsWith(searchValue)
      || user.name.firstName.startsWith(searchValue)
      || `${user.name.firstName} ${user.name.lastName}`.startsWith(searchValue));
  }
}

export default UsersService;
