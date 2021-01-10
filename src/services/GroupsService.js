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

  static async searchPrivateGroups(userId, searchValue) {
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
    const { data } = await apiGatewayInstance.post('/groups', {
      ...newGroup,
      users: [...newGroup.users.map((userObject) => {
        return { id: userObject.user.id, role: userObject.role };
      })],
    });
    return data;
  }

  static async getGroupById(groupId) {
    const { data } = await apiGatewayInstance.get(`/groups/${groupId}`);
    return data;
  }

  static async deleteGroup(groupId) {
    await apiGatewayInstance.delete(`/groups/${groupId}`);
  }

  static async updateGroup(group, newGroup) {
    await this._updateGroupDetails(group._id, newGroup).catch((e) => {
      throw e;
    });
    await this._updateGroupTags(group, newGroup).catch((e) => {
      throw e;
    });
    await this._updateGroupUsers(group, newGroup).catch((e) => {
      throw e;
    });
  }

  static async _updateGroupUsers(group, newGroup) {
    const prevUsersList = group.users;
    const newUsersList = newGroup.users;
    this._removeUsersFromGroup(group._id, prevUsersList, newUsersList);
    this._addUsersToGroup(group._id, prevUsersList, newUsersList);
    this._updateUsersRole(group._id, prevUsersList, newUsersList);
  }

  static async removeUserFromGroup(groupId, userId) {
    await apiGatewayInstance.delete(`/groups/${groupId}/users/${userId}`);
  }

  static async _removeUsersFromGroup(groupId, prevUsersList, newUsersList) {
    prevUsersList.forEach((prevUserObject) => {
      if (!this.isUserExist(newUsersList, prevUserObject.user.id)) {
        this.removeUserFromGroup(groupId, prevUserObject.user.id);
      }
    });
  }

  static _addUsersToGroup(groupId, prevUsersList, newUsersList) {
    newUsersList.forEach((newUserObject) => {
      if (!this.isUserExist(prevUsersList, newUserObject.user.id)) {
        this._addUserToGroup(groupId, newUserObject);
      }
    });
  }

  static _updateUsersRole(groupId, prevUsersList, newUsersList) {
    newUsersList.forEach((newUserObject) => {
      if (this.isUserExist(prevUsersList, newUserObject.user.id)
        && this._getUserFromList(
          prevUsersList, newUserObject.user.id,
        ).role !== newUserObject.role) {
        this._updateUserRole(groupId, newUserObject.user.id, newUserObject.role);
      }
    });
  }

  static async _addUserToGroup(groupId, newUser) {
    await apiGatewayInstance.post(`/groups/${groupId}/users`,
      { id: newUser.user.id, role: newUser.role });
  }

  static async _updateUserRole(groupId, userId, newRole) {
    await apiGatewayInstance.patch(`/${groupId}/users/${userId}`,
      { role: newRole });
  }

  static async _updateGroupDetails(groupId, newGroup) {
    await apiGatewayInstance.patch(`groups/${groupId}`,
      {
        name: newGroup.name,
        description: newGroup.description,
        type: newGroup.type,
        icon: newGroup.icon,
      });
  }

  static async _updateGroupTags(group, newGroup) {
    const prevTagsList = group.tags;
    const newTagsList = newGroup.tags;
    this._removeTagsFromGroup(group._id, prevTagsList, newTagsList);
    this._addTagsToGroup(group._id, prevTagsList, newTagsList);
  }

  static _removeTagsFromGroup(groupId, prevTagsList, newTagsList) {
    prevTagsList.forEach((prevTag) => {
      if (!this.isTagExist(newTagsList, prevTag)) {
        this._removeTagFromGroup(groupId, prevTag);
      }
    });
  }

  static _addTagsToGroup(groupId, prevTagsList, newTagsList) {
    newTagsList.forEach((newTag) => {
      if (!this.isTagExist(prevTagsList, newTag)) {
        this._addTagToGroup(groupId, newTag);
      }
    });
  }

  static async _addTagToGroup(groupId, newTag) {
    await apiGatewayInstance.put(`groups/${groupId}/tags/${newTag.label}`);
  }

  static async _removeTagFromGroup(groupId, tagToRemove) {
    await apiGatewayInstance.delete(`groups/${groupId}/tags/${tagToRemove.label}`);
  }
}

export default GroupsService;
