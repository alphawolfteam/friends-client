import config from '../appConf';
import GroupsService from './Mock/GroupsService';
// import GroupsService from './GroupsService';

class ValidationService {
  static validateGroupObject(groupObject) {
    return [
      this.validateGroupName(groupObject.name),
      this.validateGroupDescription(groupObject.description),
      this.validateGroupUsers(groupObject.users),
    ].filter((field) => field !== null);
  }

  static validateGroupDescription(groupDescription) {
    if (!groupDescription || groupDescription === '') {
      return 'emptyDescriptionInput';
    }
    return null;
  }

  static validateGroupUsers(groupUsers) {
    if (!groupUsers || groupUsers.length <= 1) {
      return 'noMembersInList';
    }
    return null;
  }

  static validateGroupName(groupName) {
    if (!groupName || groupName === '') {
      return 'emptyNameInput';
    }
    if (groupName.length < config.minGroupNameLength) {
      return 'nameTooShort';
    }
    return null;
  }

  static validateNewGroupTag(groupTags, newTag) {
    if (!newTag || newTag === '') {
      return 'emptyTagInput';
    }
    if (newTag.length < config.minTagLength) {
      return 'tagTooShort';
    }
    if (GroupsService.isTagExist(groupTags, newTag)) {
      return 'tagAlreadyExist';
    }
    return null;
  }
}

export default ValidationService;
