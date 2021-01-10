import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import EditableGroupDialogTemplate from
  '../../components/editable-group-dialog-template/EditableGroupDialogTemplate';
import AlertValidationMessage from '../../components/alert-validation-message/AlertValidationMessage';
import userContext from '../../stores/userStore';
import refreshDataContext from '../../stores/refreshDataStore';
import groupIconsCodes from '../../utils/images/group-icons/group-icons-base64-codes';
import GroupsService from '../../services/GroupsService';
import ValidationService from '../../services/ValidationService';
import { getRole } from '../../utils/sharedFunctions';

const DEFAULT_TYPE = 'private';
const DEFAULT_ICON = groupIconsCodes[0];

const AddGroupDialog = ({ open, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const refreshData = useContext(refreshDataContext);
  const [openValidationMessage, setOpenValidationMessage] = useState(false);
  const [validationArray, setValidationArray] = useState([]);
  const [newGroup, setNewGroup] = useState({
    name: '',
    description: '',
    tags: [],
    type: DEFAULT_TYPE,
    users: [
      {
        user: {
          id: currentUser.genesisId,
          fullName: `${currentUser.name.firstName} ${currentUser.name.lastName}`,
        },
        role: getRole('manager').value,
      }],
    icon: DEFAULT_ICON,
  });

  const handleAdd = async () => {
    setValidationArray(() => {
      const newValue = ValidationService.validateGroupObject(newGroup);

      // TODO: Add loader
      if (newValue.length === 0) {
        // TODO: Add loader
        GroupsService.createGroup(newGroup)
          .then(() => {
            // TODO: Update only
            refreshData();
            onClose();
          })
          .catch(() => enqueueSnackbar(t('message.error'), { variant: 'error' }));
      } else {
        setOpenValidationMessage(true);
      }

      return newValue;
    });
  };

  const dialogActions = (
    <>
      <Button onClick={() => handleAdd()}>
        {t('button.add')}
      </Button>
      <Button onClick={() => onClose()}>
        {t('button.cancel')}
      </Button>
    </>
  );

  return (
    <>
      <EditableGroupDialogTemplate
        newGroup={newGroup}
        setNewGroup={setNewGroup}
        actions={dialogActions}
        open={open}
      />
      <AlertValidationMessage
        validationArray={validationArray}
        open={openValidationMessage}
        onClose={() => setOpenValidationMessage(false)}
      />
    </>
  );
};

export default AddGroupDialog;
