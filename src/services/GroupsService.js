import axios from 'axios';
import config from '../appConf';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

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
    const { data } = await axios.get(`${config.uri.api_gateway_uri}/groups`,
      { params: { partial: searchValue, type: 'private' } },
      { ...headers });
    return data;
  }

  static async searchPublicGroups(searchValue) {
    const { data } = await axios.get(`${config.uri.api_gateway_uri}/groups`,
      { params: { partial: searchValue, type: 'public' } },
      { ...headers });
    return data;
  }

  static async getUserGroups(userId) {
    const { data } = await axios.get(`${config.uri.api_gateway_uri}/users/${userId}/groups`,
      { ...headers });
    return data;
  }

  static async createGroup(newGroup) {
    const { data } = await axios.post(`${config.uri.api_gateway_uri}/groups`, newGroup,
      { ...headers });
    return data;
  }

  static async getGroupById(groupId) {
    const { data } = await axios.get(`${config.uri.api_gateway_uri}/groups/${groupId}`,
      { ...headers });
    return data;
  }

  static async deleteGroup(groupId) {
    await axios.delete(`${config.uri.api_gateway_uri}/groups/${groupId}`, { ...headers });
  }

  static async removeUserFromGroup(groupId, userId) {
    // TODO: Delete
    await new Promise((res) => setTimeout(res, 3000));
    await axios.delete(`${config.uri.api_gateway_uri}/groups/${groupId}/users/${userId}`,
      { ...headers });
  }

  static async addUserToGroup(groupId, newUser) {
    // TODO: Delete
    await new Promise((res) => setTimeout(res, 3000));
    await axios.post(`${config.uri.api_gateway_uri}/groups/${groupId}/users`, newUser,
      { ...headers });
  }

  static async updateUserRole(groupId, userId, newRole) {
    // TODO: Delete
    await new Promise((res) => setTimeout(res, 3000));
    const updatedUser = await axios.patch(
      `${config.uri.api_gateway_uri}/groups/${groupId}/users/${userId}`,
      { role: newRole },
      { ...headers },
    );
    return updatedUser;
  }

  static async updateGroupDetails(groupId, newGroup) {
    await axios.patch(`${config.uri.api_gateway_uri}/groups/${groupId}`,
      {
        name: newGroup.name,
        description: newGroup.description,
        type: newGroup.type,
        icon: newGroup.icon,
      },
      { ...headers });
  }

  static async addTagToGroup(groupId, newTag) {
    // TODO: Delete
    await new Promise((res) => setTimeout(res, 3000));
    await axios.put(`${config.uri.api_gateway_uri}/groups/${groupId}/tags/${newTag}`,
      { ...headers });
  }

  static async removeTagFromGroup(groupId, tagToRemove) {
    // TODO: Delete
    await new Promise((res) => setTimeout(res, 3000));
    await axios.delete(`${config.uri.api_gateway_uri}/groups/${groupId}/tags/${tagToRemove}`,
      { ...headers });
  }
}

export default GroupsService;
