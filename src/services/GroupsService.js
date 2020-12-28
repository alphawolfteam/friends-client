// import axiosInstance from '../axiosConf';
// import axios from "axios";

// TODO: Delete
import { groups } from './MockData';

// TODO: delete
const isIncludesInSentence = (sentence, portion) => (
  sentence.startsWith(portion)
  || sentence.split(' ').filter((word) => word.startsWith(portion)).length > 0
);

const getUserFromList = (usersList, userIdToFind) => {
  return usersList.find((user) => user.id === userIdToFind);
};

// TODO: Error handler
class GroupsService {
  static getUserRoleCode(group, userId) {
    let role = false;
    group.users.forEach((groupUser) => {
      if (userId === groupUser.id) {
        role = groupUser.role;
      }
    });
    return role;
  }

  static async searchPrivateGroups(userId, searchValue) {
    // TODO: Axios request

    return (await this.getPrivateGroups(userId))
      .filter((publicGroup) => isIncludesInSentence(publicGroup.name, searchValue)
        || publicGroup.tags.filter((tag) => isIncludesInSentence(tag, searchValue)).length > 0);
  }

  static async searchPublicGroups(searchValue) {
    // TODO: Axios request

    const publicGroups = groups.filter((group) => group.type === 'public');
    return publicGroups.filter((publicGroup) => isIncludesInSentence(publicGroup.name, searchValue)
      || publicGroup.tags.filter((tag) => isIncludesInSentence(tag, searchValue)).length > 0);
  }

  static async getPrivateGroups(userId) {
    // TODO: Axios request
    // const { data } = await axios.get(`/groups/users/:${userId}`);
    // return data;

    return groups.filter((group) => group.type === 'private'
      && group.users.map((user) => user.id).includes(userId));
  }

  static async createGroup(newGroup) {
    // TODO: Axios request
    // await axios.post('/', newGroup);

    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    groups.push({ ...newGroup, _id: uint32.toString(16) });
  }

  static async getGroupUsers(groupId) {
    // TODO: Axios request
    // await axios.get(`/${groupId}/users`);

    const groupToFind = groups[groups.map((group) => group._id).indexOf(groupId)];
    return groupToFind.users;
  }

  static async deleteGroup(groupId) {
    // TODO: Axios request
    // await axios.delete(`/${groupId}`);

    const groupIndexInArray = groups.map((group) => group._id).indexOf(groupId);
    groups.splice(groupIndexInArray, 1);
  }

  static async updateGroup(group, newGroup) {
    this._updateGroupDetails(group._id, newGroup);
    const prevUsersList = group.users;
    const newUsersList = newGroup.users;
    this._removeUsersFromGroup(group._id, prevUsersList, newUsersList);
    this._addUsersToGroup(group._id, prevUsersList, newUsersList);
    this._updateUsersRole(group._id, prevUsersList, newUsersList);
  }

  static async removeUserFromGroup(groupId, userId) {
    // TODO: Axios request
    // await axios.post(`/${groupId}/users/${userId}`);

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.users = groupToUpdate.users.filter((user) => user.id !== userId);
  }

  static _removeUsersFromGroup(groupId, prevUsersList, newUsersList) {
    prevUsersList.forEach((prevUser) => {
      if (!getUserFromList(newUsersList, prevUser.id)) {
        this.removeUserFromGroup(groupId, prevUser.id);
      }
    });
  }

  static _addUsersToGroup(groupId, prevUsersList, newUsersList) {
    newUsersList.forEach((newUser) => {
      if (!getUserFromList(prevUsersList, newUser.id)) {
        this._addUserToGroup(groupId, newUser);
      }
    });
  }

  static _updateUsersRole(groupId, prevUsersList, newUsersList) {
    newUsersList.forEach((newUser) => {
      if (getUserFromList(prevUsersList, newUser.id)
        && getUserFromList(prevUsersList, newUser.id).role !== newUser.role) {
        this._updateUserRole(groupId, newUser.id, newUser.role);
      }
    });
  }

  static async _updateGroupDetails(groupId, newGroup) {
    // TODO: Axios request
    // await axios.put(`/${groupId}`, newGroup);

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.name = newGroup.name;
    groupToUpdate.description = newGroup.description;
    groupToUpdate.type = newGroup.type;
    groupToUpdate.tags = newGroup.tags;
    groupToUpdate.icon = newGroup.icon;
  }

  static async _addUserToGroup(groupId, newUser) {
    // TODO: Axios request
    // await axios.post(`/${groupId}/users`, newUser);

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.users.push(newUser);
  }

  static async _updateUserRole(groupId, userId, newRole) {
    // TODO: Axios request
    // await axios.post(`/${groupId}/users/${userId}`, newRole);

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    const userToUpdate = groupToUpdate.users[
      groupToUpdate.users.map((user) => user.id).indexOf(userId)];
    userToUpdate.role = newRole;
  }
}

export default GroupsService;
