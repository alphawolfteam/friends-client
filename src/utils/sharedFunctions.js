// import GroupsService from '../services/GroupsService';
import GroupsService from '../services/Mock/GroupsService';
import config from '../appConf';

export const getRole = (role) => {
  return config.roles.filter((currentRole) => currentRole.role === role)[0];
};

export const getRoleByValue = (roleValue) => {
  return config.roles.filter((currentRole) => currentRole.value === roleValue)[0];
};

export const getRoleByDisplayName = (roleDisplayName) => {
  return config.roles.filter((currentRole) => currentRole.displayName === roleDisplayName)[0];
};

export const getSortedGroupsByRole = (groupsList, userId) => {
  const ownedGroups = [];
  const unownedGroups = [];

  groupsList.forEach((group) => {
    if (GroupsService.getUserRoleValue(group, userId) === getRole('manager').value) {
      ownedGroups.push(group);
    } else {
      unownedGroups.push(group);
    }
  });

  return [...ownedGroups, ...unownedGroups];
};

export const getSortedGroupsByType = (groupsList) => {
  const privateGroups = [];
  const publicGroups = [];

  groupsList.forEach((group) => {
    if (group.type === 'private') {
      privateGroups.push(group);
    } else {
      publicGroups.push(group);
    }
  });

  return [...privateGroups, ...publicGroups];
};

export const getSortedTagsByString = (tagsList, string) => {
  const matchedTags = [];
  const unmatchedTags = [];
  tagsList.forEach((tag) => {
    if (tag.label.startsWith(string)) {
      matchedTags.push(tag);
    } else {
      unmatchedTags.push(tag);
    }
  });
  return [...matchedTags, ...unmatchedTags];
};

export const getUserIndex = (usersList, userObjectToFind) => {
  return usersList.map((userObject) => userObject.user.id).indexOf(userObjectToFind.user.id);
};
