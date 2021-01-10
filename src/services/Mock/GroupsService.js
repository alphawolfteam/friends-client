import { groups, users, currentUser } from './MockData';

const isIncludesInSentence = (sentence, portion) => (
  sentence.startsWith(portion)
  || sentence.split(' ').filter((word) => word.startsWith(portion)).length > 0
);

class GroupsService {
  static isTagExist(tagsList, tagLabelToFind) {
    return tagsList.find((tag) => tag.label === tagLabelToFind) !== undefined;
  }

  static isUserExist(usersList, userIdToFind) {
    return this._getUserFromList(usersList, userIdToFind) !== undefined;
  }

  static _getUserFromList(usersList, userIdToFind) {
    return usersList.find((userObject) => userObject.user.id === userIdToFind);
  }

  static getUserRoleValue(group, userId) {
    let role;
    group.users.forEach((groupUser) => {
      if (userId === groupUser.id) {
        role = groupUser.role;
      }
    });
    return role;
  }

  static getUserRoleValueFromPopulatedGroup(group, userId) {
    let role;
    group.users.forEach((userObject) => {
      if (userId === userObject.user.id) {
        role = userObject.role;
      }
    });
    return role;
  }

  static async searchPrivateGroups(searchValue) {
    return groups.filter((group) => group.type === 'private'
      && group.users.map((user) => user.id).includes(currentUser.id))
      .filter((publicGroup) => isIncludesInSentence(publicGroup.name, searchValue)
        || publicGroup.tags
          .filter((tag) => isIncludesInSentence(tag.label, searchValue)).length > 0);
  }

  static async searchPublicGroups(searchValue) {
    const publicGroups = groups.filter((group) => group.type === 'public');
    return publicGroups.filter((publicGroup) => isIncludesInSentence(
      publicGroup.name,
      searchValue,
    )
      || publicGroup.tags.filter((tag) => isIncludesInSentence(
        tag.label,
        searchValue,
      )).length > 0);
  }

  static async getUserGroups(userId) {
    return groups.filter((group) => group.users.map((user) => user.id).includes(userId));
  }

  static async createGroup(newGroup) {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    groups.push({
      ...newGroup,
      _id: uint32.toString(16),
    });
  }

  static async getGroupById(groupId) {
    const groupToFind = groups[groups.map((group) => group._id).indexOf(groupId)];
    return {
      ...groupToFind,
      users: groupToFind.users
        .map((groupUser) => {
          return {
            user: { ...users.find((user) => user.id === groupUser.id) },
            role: groupUser.role,
          };
        }),
    };
  }

  static async deleteGroup(groupId) {
    const groupIndexInArray = groups.map((group) => group._id).indexOf(groupId);
    groups.splice(groupIndexInArray, 1);
  }

  static async removeUserFromGroup(groupId, userId) {
    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.users = groupToUpdate.users.filter((user) => user.id !== userId);
  }

  static async addUserToGroup(groupId, newUser) {
    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.users.push(newUser);
  }

  static async updateUserRole(groupId, userId, newRole) {
    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    const userToUpdate = groupToUpdate.users[
      groupToUpdate.users.map((user) => user.id).indexOf(userId)];
    userToUpdate.role = newRole;
  }

  static async updateGroupDetails(groupId, newGroup) {
    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.name = newGroup.name;
    groupToUpdate.description = newGroup.description;
    groupToUpdate.type = newGroup.type;
    groupToUpdate.icon = newGroup.icon;
  }

  // eslint-disable-next-line no-unused-vars
  static async addTagToGroup(groupId, newTag) {
    // const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    // if (!groupToUpdate.tags.map((tag) => tag.label).includes(newTag)) {
    //   groupToUpdate.tags.push({ label: newTag });
    // }
  }

  static async removeTagFromGroup(groupId, tagToRemove) {
    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.tags = groupToUpdate.tags.filter((tag) => tag.label !== tagToRemove);
  }
}

export default GroupsService;
