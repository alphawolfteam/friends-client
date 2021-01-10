import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import EditableGroupDialogTemplate from
  '../../components/editable-group-dialog-template/EditableGroupDialogTemplate';
import AlertMessageTemplate from '../../components/alert-message-template/AlertMessageTemplate';
import userContext from '../../stores/userStore';
import refreshDataContext from '../../stores/refreshDataStore';
import groupIconsCodes from '../../utils/images/group-icons/group-icons-base64-codes';
import GroupsService from '../../services/GroupsService';
import ValidationService from '../../services/ValidationService';
import { getRole } from '../../utils/sharedFunctions';

const DEFAULT_TYPE = 'private';
const DEFAULT_ICON = groupIconsCodes[0];

const AddGroupDialog = ({ open, onClose }) => {
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const refreshData = useContext(refreshDataContext);
  const [openAlertMessage, setOpenAlertMessage] = useState(false);
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
    // TODO: Add loader
    if (ValidationService.validateGroupObject(newGroup).length === 0) {
      // TODO: Add loader
      GroupsService.createGroup(newGroup)
        .then(() => {
          // TODO: Update only
          refreshData();
          onClose();
        })
      // TODO: Display error
        .catch((e) => console.log(e));
    } else {
      setOpenAlertMessage(true);
    }
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
      <AlertMessageTemplate
        message={t('alertMessage.addValidation')}
        open={openAlertMessage}
        onClose={() => setOpenAlertMessage(false)}
      />
    </>
  );
};

export default AddGroupDialog;
