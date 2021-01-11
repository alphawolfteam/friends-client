import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import ValidationService from '../../../services/ValidationService';
// import GroupsService from '../../../services/GroupsService';
import GroupsService from '../../../services/Mock/GroupsService';
import { setNewGroupName } from '../../shared/sharedFunctions';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';
import EditableTextField from '../editable-text-field/EditableTextField';

const GroupNameInput = ({ group, setGroup }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSave = (newName) => {
    const validationResult = ValidationService.validateGroupName(newName);
    if (validationResult === null) {
      if (group.name !== newName) {
        setIsLoading(true);
        GroupsService.updateGroupDetails(group._id, { ...group, name: newName })
          .then(() => {
            setNewGroupName(setGroup, newName);
            setEditMode(false);
          })
          .catch(() => {
            enqueueSnackbar(
              <CustomeSnackbarContent message={t('error.server')} />,
              { variant: 'error' },
            );
          }).finally(() => {
            setIsLoading(false);
          });
      } else {
        setEditMode(false);
      }
    } else {
      enqueueSnackbar(<CustomeSnackbarContent message={t(`validation.${validationResult}`)} />);
    }
  };

  return (
    <EditableTextField
      rows={1}
      width="60%"
      placeholder={t('placeholder.name')}
      value={group.name}
      onSave={(value) => handleOnSave(value)}
      editMode={editMode}
      setEditMode={setEditMode}
      isLoading={isLoading}
    />
  );
};

export default GroupNameInput;
