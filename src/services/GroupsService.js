// import { apiGatewayInstance } from '../axiosConf';

// TODO: Delete
import { groups, users } from './MockData';

// TODO: delete
const isIncludesInSentence = (sentence, portion) => (
  sentence.startsWith(portion)
  || sentence.split(' ').filter((word) => word.startsWith(portion)).length > 0
);

// TODO: Error handler
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
    // TODO: Axios request
    // const { data } = await apiGatewayInstance.get('/groups',
    // { params: { partial  : searchValue, type: 'private' } });
    // return data;

    return groups.filter((group) => group.type === 'private'
      && group.users.map((user) => user.id).includes(userId))
      .filter((publicGroup) => isIncludesInSentence(publicGroup.name, searchValue)
        || publicGroup.tags
          .filter((tag) => isIncludesInSentence(tag.label, searchValue)).length > 0);
  }

  static async searchPublicGroups(searchValue) {
    // TODO: Axios request
    // const { data } = await apiGatewayInstance.get('/groups',
    // { params: { partial  : searchValue, type: 'public' } });
    // return data;

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
    // TODO: Axios request
    // const { data } = await apiGatewayInstance.get(`/users/:${userId}/groups`);
    // return data;

    return groups.filter((group) => group.users.map((user) => user.id).includes(userId));
  }

  static async createGroup(newGroup) {
    // TODO: Axios request
    // const { data } = await apiGatewayInstance.post('/groups', {
    //   {
    //     ...newGroup,
    //     users: [...newGroup.users.map((userObject) => {
    //       return { id: userObject.user.id, role: userObject.role };
    //     })]
    // });
    // return data;

    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    groups.push({
      ...newGroup,
      users: [...newGroup.users.map((userObject) => {
        return { id: userObject.user.id, role: userObject.role };
      })],
      _id: uint32.toString(16),
    });
  }

  static async getGroupById(groupId) {
    // TODO: Axios request
    // const { data } = await apiGatewayInstance.get(`/groups/${groupId}`);
    // return data;

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
    // TODO: Axios request
    // await apiGatewayInstance.delete(`/groups/${groupId}`);

    const groupIndexInArray = groups.map((group) => group._id).indexOf(groupId);
    groups.splice(groupIndexInArray, 1);
  }

  static async updateGroup(group, newGroup) {
    this._updateGroupDetails(group._id, newGroup);
    this._updateGroupTags(group, newGroup);
    this._updateGroupUsers(group, newGroup);
  }

  static async _updateGroupUsers(group, newGroup) {
    const prevUsersList = group.users;
    const newUsersList = newGroup.users;
    this._removeUsersFromGroup(group._id, prevUsersList, newUsersList);
    this._addUsersToGroup(group._id, prevUsersList, newUsersList);
    this._updateUsersRole(group._id, prevUsersList, newUsersList);
  }

  static async removeUserFromGroup(groupId, userId) {
    // TODO: Axios request
    // await apiGatewayInstance.delete(`/groups/${groupId}/users/${userId}`);

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.users = groupToUpdate.users.filter((user) => user.id !== userId);
  }

  static _removeUsersFromGroup(groupId, prevUsersList, newUsersList) {
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
    // TODO: Axios request
    // await apiGatewayInstance.post(`/groups/${groupId}/users`,
    // { id: newUser.user.id, role: newUser.role });

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.users.push({ id: newUser.user.id, role: newUser.role });
  }

  static async _updateUserRole(groupId, userId, newRole) {
    // TODO: Axios request
    // await axios.patch(`/${groupId}/users/${userId}`, { role: newRole });

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    const userToUpdate = groupToUpdate.users[
      groupToUpdate.users.map((user) => user.id).indexOf(userId)];
    userToUpdate.role = newRole;
  }

  static async _updateGroupDetails(groupId, newGroup) {
    // TODO: Axios request
    // await axios.patch(`groups/${groupId}`,
    // { name: newGroup.name, description: newGroup.description,
    // type: newGroup.type, icon: newGroup.icon });

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.name = newGroup.name;
    groupToUpdate.description = newGroup.description;
    groupToUpdate.type = newGroup.type;
    groupToUpdate.icon = newGroup.icon;
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
    // TODO: Axios request
    // await axios.put(`groups/${groupId}/tags/${newTag.label}`);

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.tags.push(newTag);
  }

  static async _removeTagFromGroup(groupId, tagToRemove) {
    // TODO: Axios request
    // await axios.delete(`groups/${groupId}/tags/${tagToRemove.label}`);

    const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
    groupToUpdate.tags = groupToUpdate.tags.filter((tag) => tag.label !== tagToRemove.label);
  }
}

export default GroupsService;
