import GroupsService from './GroupsService';

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

  static validateGroupName(groupName, minGroupNameLength) {
    if (!groupName || groupName === '') {
      return 'emptyNameInput';
    }
    if (groupName.length < minGroupNameLength) {
      return 'nameTooShort';
    }
    return null;
  }

  static validateNewGroupTag(groupTags, newTag, minTagLength) {
    if (!newTag || newTag === '') {
      return 'emptyTagInput';
    }
    if (newTag.length < minTagLength) {
      return 'tagTooShort';
    }
    if (GroupsService.isTagExist(groupTags, newTag)) {
      return 'tagAlreadyExist';
    }
    return null;
  }
}

export default ValidationService;
