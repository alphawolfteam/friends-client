import GroupsService from '../services/GroupsService';
import config from '../appConf';

const { getRole } = config;

export const getSortedGroups = (groupsList, userId) => {
  const ownedGroups = [];
  const unownedGroups = [];

  groupsList.forEach((group) => {
    if (GroupsService.getUserRoleCode(group, userId) === getRole('manager').code) {
      ownedGroups.push(group);
    } else {
      unownedGroups.push(group);
    }
  });

  return [...ownedGroups, ...unownedGroups];
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
