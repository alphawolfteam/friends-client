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
    return usersList.find(({ user }) => user.id === userIdToFind) !== undefined;
  }

  static getUserRole(group, userId) {
    let role;
    group.users.forEach((groupUser) => {
      if (userId === groupUser.id) {
        role = groupUser.role;
      }
    });
    return role;
  }

  static getUserRoleFromPopulatedGroup(group, userId) {
    let userRole;
    group.users.forEach(({ user, role }) => {
      if (userId === user.id) {
        userRole = role;
      }
    });
    return userRole;
  }

  static async searchPrivateGroups(searchValue) {
    const { data } = await axios.get(`${config.uri.api_gateway_uri}api/groups`,
      { params: { partial: searchValue, type: 'private' } },
      { ...headers });
    return data;
  }

  static async searchPublicGroups(searchValue) {
    const { data } = await axios.get(`${config.uri.api_gateway_uri}api/groups`,
      { params: { partial: searchValue, type: 'public' } },
      { ...headers });
    return data;
  }

  static async getUserGroups(userId) {
    const { data } = await axios.get(`${config.uri.api_gateway_uri}api/users/${userId}/groups`,
      { ...headers });
    return data;
  }

  static async createGroup(newGroup) {
    const { data } = await axios.post(`${config.uri.api_gateway_uri}api/groups`, newGroup,
      { ...headers });
    return data;
  }

  static async getGroupById(groupId) {
    const res = await axios.get(`${config.uri.api_gateway_uri}api/groups/${groupId}`,
      { ...headers });
    if (res.status === 206) {
      throw new Error('Partial Content');
    }
    return res.data;
  }

  static async deleteGroup(groupId) {
    await axios.delete(`${config.uri.api_gateway_uri}api/groups/${groupId}`, { ...headers });
  }

  static async removeUserFromGroup(groupId, userId) {
    await axios.delete(`${config.uri.api_gateway_uri}api/groups/${groupId}/users/${userId}`,
      { ...headers });
  }

  static async addUserToGroup(groupId, newUser) {
    await axios.post(`${config.uri.api_gateway_uri}api/groups/${groupId}/users`, newUser,
      { ...headers });
  }

  static async updateUserRole(groupId, userId, newRole) {
    const updatedUser = await axios.patch(
      `${config.uri.api_gateway_uri}api/groups/${groupId}/users/${userId}`,
      { role: newRole },
      { ...headers },
    );
    return updatedUser;
  }

  static async updateGroupDetails(groupId, newGroup) {
    await axios.patch(`${config.uri.api_gateway_uri}api/groups/${groupId}`,
      {
        name: newGroup.name,
        description: newGroup.description,
        type: newGroup.type,
        icon: newGroup.icon,
      },
      { ...headers });
  }

  static async addTagToGroup(groupId, newTag) {
    await axios.put(`${config.uri.api_gateway_uri}api/groups/${groupId}/tags/${newTag}`,
      { ...headers });
  }

  static async removeTagFromGroup(groupId, tagToRemove) {
    await axios.delete(`${config.uri.api_gateway_uri}api/groups/${groupId}/tags/${tagToRemove}`,
      { ...headers });
  }
}

export default GroupsService;
