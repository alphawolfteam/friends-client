import GroupsService from './GroupsService';

class ValidationService {
  static validateGroupObject(groupObject, minGroupNameLength) {
    const validations = {
      name: {
        required: true,
        emptyError: 'emptyNameInput',
        minLength: minGroupNameLength,
        tooShortError: 'nameTooShort',
      },
      description: {
        required: true,
        emptyError: 'emptyDescriptionInput',
      },
      users: {
        minLength: 2,
        tooShortError: 'noMembersInList',
      },
    };

    return Object.entries(validations).reduce((errors, [property, requirements]) => {
      if (requirements.required && !groupObject[property]) {
        errors.push(requirements.emptyError);
      } else if (requirements.minLength && groupObject[property]
        && groupObject[property].length < requirements.minLength) {
        errors.push(requirements.tooShortError);
      }
      return errors;
    }, []);
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
