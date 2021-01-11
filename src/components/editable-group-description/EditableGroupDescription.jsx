import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import ValidationService from '../../services/ValidationService';
import GroupsService from '../../services/Mock/GroupsService';
// import GroupsService from '../../services/GroupsService';
import { setNewGroupDescription } from '../../utils/sharedFunctions';
import CustomeSnackbarContent from '../custome-snackbar-content/CustomeSnackbarContent';
import EditableTextField from '../editable-text-field/EditableTextField';

const GroupDescriptionInput = ({ group, setGroup }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSave = (newDescription) => {
    const validationResult = ValidationService.validateGroupDescription(newDescription);
    if (validationResult === null) {
      if (group.description !== newDescription) {
        setIsLoading(true);
        GroupsService.updateGroupDetails(group._id, { ...group, description: newDescription })
          .then(() => {
            setNewGroupDescription(setGroup, newDescription);
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
      rows={2}
      width="90%"
      placeholder={t('placeholder.description')}
      value={group.description}
      onSave={(value) => handleOnSave(value)}
      editMode={editMode}
      setEditMode={setEditMode}
      isLoading={isLoading}
    />
  );
};

export default GroupDescriptionInput;
