class ValidationService {
  static validateGroupObject(groupObject) {
    const validationArray = [];

    if (!groupObject.name || groupObject.name === '') {
      validationArray.push('emptyNameInput');
    }
    if (!groupObject.description || groupObject.description === '') {
      validationArray.push('emptyDescriptionInput');
    }
    if (!groupObject.users || groupObject.users.length <= 1) {
      validationArray.push('noMembersInList');
    }

    return validationArray;
  }
}

export default ValidationService;
