import { apiGatewayInstance } from '../axiosConf';

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
    const { data } = await apiGatewayInstance.get('/groups',
      { params: { partial: searchValue, type: 'private' } });
    return data;
  }

  static async searchPublicGroups(searchValue) {
    const { data } = await apiGatewayInstance.get('/groups',
      { params: { partial: searchValue, type: 'public' } });
    return data;
  }

  static async getUserGroups(userId) {
    const { data } = await apiGatewayInstance.get(`/users/:${userId}/groups`);
    return data;
  }

  static async createGroup(newGroup) {
    const { data } = await apiGatewayInstance.post('/groups', newGroup);
    return data;
  }

  static async getGroupById(groupId) {
    const { data } = await apiGatewayInstance.get(`/groups/${groupId}`);
    return data;
  }

  static async deleteGroup(groupId) {
    await apiGatewayInstance.delete(`/groups/${groupId}`);
  }

  static async removeUserFromGroup(groupId, userId) {
    await apiGatewayInstance.delete(`/groups/${groupId}/users/${userId}`);
  }

  static async addUserToGroup(groupId, newUser) {
    await apiGatewayInstance.post(`/groups/${groupId}/users`, newUser);
  }

  static async updateUserRole(groupId, userId, newRole) {
    await apiGatewayInstance.patch(`/${groupId}/users/${userId}`,
      { role: newRole });
  }

  static async updateGroupDetails(groupId, newGroup) {
    await apiGatewayInstance.patch(`groups/${groupId}`,
      {
        name: newGroup.name,
        description: newGroup.description,
        type: newGroup.type,
        icon: newGroup.icon,
      });
  }

  static async addTagToGroup(groupId, newTag) {
    await apiGatewayInstance.put(`groups/${groupId}/tags/${newTag}`);
  }

  static async removeTagFromGroup(groupId, tagToRemove) {
    await apiGatewayInstance.delete(`groups/${groupId}/tags/${tagToRemove}`);
  }
}

export default GroupsService;
