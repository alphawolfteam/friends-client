import React from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import ValidationService from '../../services/ValidationService';
// import GroupsService from '../../services/GroupsService';
import GroupsService from '../../services/Mock/GroupsService';
import { setNewGroupName } from '../../utils/sharedFunctions';
import CustomeSnackbarContent from '../custome-snackbar-content/CustomeSnackbarContent';
import EditableTextField from '../editable-text-field/EditableTextField';

const GroupNameInput = ({ group, setGroup }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSave = (newName) => {
    const validationResult = ValidationService.validateGroupName(newName);
    if (validationResult === null) {
      // TODO: Add loader
      GroupsService.updateGroupDetails(group._id, { ...group, newName })
        .then(() => {
          setNewGroupName(setGroup, newName);
          return true;
        })
        .catch(() => {
          enqueueSnackbar(
            <CustomeSnackbarContent message={t('error.server')} />,
            { variant: 'error' },
          );
          return false;
        });
    } else {
      enqueueSnackbar(<CustomeSnackbarContent message={t(`validation.${validationResult}`)} />);
      return false;
    }
  };

  return (
    <EditableTextField
      rows={1}
      width="60%"
      placeholder={t('placeholder.name')}
      value={group.name}
      onSave={(value) => handleOnSave(value)}
    />
  );
};

export default GroupNameInput;
