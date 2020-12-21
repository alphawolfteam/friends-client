// import axiosInstance from '../axiosConf';
// import axios from "axios";
// TODO: Delete
import { groups, currentUser } from './MockData';
import config from '../appConf';

const { rolesEnum } = config;

// TODO: delete
const isIncludesInSentence = (sentence, portion) => (
  sentence.startsWith(portion)
  || sentence.split(' ').filter((word) => word.startsWith(portion)).length > 0
);

// TODO: delete
const isCurrentUserInGroup = (group) => (
  group.users.map((user) => user.id).includes(currentUser.id)
);

class GroupsService {
  static isAManager(group, userId) {
    let isAManager = false;
    group.users.forEach((groupUser) => {
      if (userId === groupUser.id && groupUser.role === rolesEnum.MANAGER) {
        isAManager = true;
      }
    });
    return isAManager;
  }

  static async getFilteredPrivateGroups(searchValue) {
    // TODO: get my groups sorted by searchValue
    return (await this.getPrivateGroups())
      .filter((publicGroup) => isIncludesInSentence(publicGroup.name, searchValue)
        || publicGroup.tags.filter((tag) => isIncludesInSentence(tag, searchValue)).length > 0);
  }

  static async getFilteredPublicGroups(searchValue) {
    // TODO: get public groups sorted by searchValue

    const publicGroups = groups.filter((group) => group.type === 'public');
    return publicGroups.filter((publicGroup) => isIncludesInSentence(publicGroup.name, searchValue)
      || publicGroup.tags.filter((tag) => isIncludesInSentence(tag, searchValue)).length > 0);
  }

  static async getPrivateGroups() {
    // TODO: get private groups
    // const { data } = await axios.get('/groups');
    // return data;

    return groups.filter((group) => group.type === 'private' && isCurrentUserInGroup(group));
  }
}

export default GroupsService;
