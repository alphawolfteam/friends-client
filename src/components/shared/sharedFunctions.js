import GroupsService from '../../services/GroupsService';

export const getSortedGroupsByRole = (groupsList, userId, managerRoleValue) => {
  const ownedGroups = [];
  const unownedGroups = [];

  groupsList.forEach((group) => {
    if (GroupsService.getUserRole(group, userId) === managerRoleValue) {
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

export const setNewGroupName = (setGroup, newName) => {
  setGroup((prevValue) => ({ ...prevValue, name: newName }));
};

export const setNewGroupDescription = (setGroup, newDescription) => {
  setGroup((prevValue) => ({ ...prevValue, description: newDescription }));
};

export const setNewGroupIcon = (setGroup, newIcon) => {
  setGroup((prevValue) => ({ ...prevValue, icon: newIcon }));
};

export const setNewGroupType = (setGroup, newType) => {
  setGroup((prevValue) => ({ ...prevValue, type: newType }));
};

export const setNewGroupUser = (setGroup, userToAdd, role) => {
  setGroup((prevValue) => ({
    ...prevValue,
    users: [
      ...prevValue.users,
      { user: { ...userToAdd }, role },
    ],
  }));
};

const getUserIndex = (usersList, userIdToFind) => {
  return usersList.map(({ user }) => user.id).indexOf(userIdToFind);
};

export const removeGroupUser = (setGroup, userIdToRemove) => {
  setGroup((prevValue) => {
    const usersList = [...prevValue.users];
    usersList.splice(getUserIndex(usersList, userIdToRemove), 1);
    return { ...prevValue, users: usersList };
  });
};

export const setNewGroupUserRole = (setGroup, userIdToUpdate, newRole) => {
  setGroup((prevValue) => {
    const usersList = [...prevValue.users];
    usersList[getUserIndex(usersList, userIdToUpdate)].role = newRole;
    return { ...prevValue, users: usersList };
  });
};

export const setNewGroupTag = (setGroup, newTag) => {
  setGroup((prevValue) => {
    const tagsList = [...prevValue.tags];
    tagsList.push({ label: newTag });
    return { ...prevValue, tags: tagsList };
  });
};

export const removeGroupTag = (setGroup, tagToRemove) => {
  setGroup((prevValue) => {
    const tagsList = [...prevValue.tags].filter((tag) => tag.label !== tagToRemove);
    return { ...prevValue, tags: tagsList };
  });
};
