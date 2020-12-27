// import axiosInstance from '../axiosConf';
// import axios from "axios";

// TODO: Delete
import { groups } from './MockData';

// TODO: delete
const isIncludesInSentence = (sentence, portion) => (
  sentence.startsWith(portion)
  || sentence.split(' ').filter((word) => word.startsWith(portion)).length > 0
);

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

  static async searchPrivateGroups(searchValue) {
    // TODO: Axios request
    return (await this.getPrivateGroups())
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

    groups.push(newGroup);
  }

  static async getGroupUsers(groupId) {
    // TODO: Axios request
    // await axios.get(`/${groupId}/users`);

    const groupToFind = groups[groups.map((group) => group._id).indexOf(groupId)];
    return groupToFind.users;
  }

  static async updateGroup(group, newGroup) {
    this._updateGroupDetails(group._id, newGroup);
    // TODO: Finish
    // const prevUsersList = group.users;
    // const newUsersList = newGroup.users;
  }

  static async deleteGroup(groupId) {
    // TODO: Axios request
    // await axios.delete(`/${groupId}`);

    groups = groups.filter((group) => group._id !== groupId);
  }

  static async removeUserFromGroup(groupId, userId) {
    // TODO: Axios request
    // await axios.post(`/${groupId}/users/${userId}`);

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.users = groupToUpdate.users.filter((user) => user.id !== userId);
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
