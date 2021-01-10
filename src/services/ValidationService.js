import config from '../appConf';

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
}

export default ValidationService;
