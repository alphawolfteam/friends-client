import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import refreshDataContext from '../../stores/refreshDataStore';
import EditableGroupDialogTemplate from
  '../../components/editable-group-dialog-template/EditableGroupDialogTemplate';
import AlertDialogTemplate from '../../components/alert-dialog-template/AlertDialogTemplate';
import AlertMessageTemplate from '../../components/alert-message-template/AlertMessageTemplate';
import GroupsService from '../../services/GroupsService';

const getNestedGroupCopy = (group) => {
  return {
    ...group,
    users: [...group.users.map((user) => {
      return { ...user };
    })],
  };
};

const EditGroupDialog = ({
  group, open, onClose, onCancel,
}) => {
  const { t } = useTranslation();
  const refreshData = useContext(refreshDataContext);
  const [openAlertSaveDialog, setOpenAlertSaveDialog] = useState(false);
  const [dialogSaveAnswer, setDialogSaveAnswer] = useState(undefined);
  const [openAlertDeleteDialog, setOpenAlertDeleteDialog] = useState(false);
  const [dialogDeleteAnswer, setDialogDeleteAnswer] = useState(undefined);
  const [openAlertMessage, setOpenAlertMessage] = useState(false);
  const [newGroup, setNewGroup] = useState(getNestedGroupCopy(group));

  useEffect(async () => {
    if (dialogSaveAnswer === 'agree') {
      // TODO: Add loader
      GroupsService.updateGroup(group, newGroup)
        .then(() => {
          // TODO: Update only
          refreshData();
          onClose();
        })
      // TODO: Display error
        .catch((e) => console.log(e));
    }
  }, [dialogSaveAnswer]);

  useEffect(async () => {
    if (dialogDeleteAnswer === 'agree') {
      // TODO: Add loader
      GroupsService.deleteGroup(group._id)
        .then(() => {
          // TODO: Update only
          refreshData();
          onClose();
        })
      // TODO: Display error
        .catch((e) => console.log(e));
    }
  }, [dialogDeleteAnswer]);

  const handleSave = () => {
    if (newGroup.name && newGroup.description
      && newGroup.users.length > 1) {
      setOpenAlertSaveDialog(true);
    } else {
      setOpenAlertMessage(true);
    }
  };

  const handleDeleteGroup = () => {
    setOpenAlertDeleteDialog(true);
  };

  const dialogActions = (
    <>
      <Button onClick={() => handleSave()}>
        {t('button.save')}
      </Button>
      <Button onClick={() => onCancel()}>
        {t('button.cancel')}
      </Button>
      <Button onClick={() => handleDeleteGroup()}>
        {t('button.deleteGroup')}
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
      <AlertDialogTemplate
        message={t('alertMessage.saveChanges')}
        open={openAlertSaveDialog}
        onClose={() => setOpenAlertSaveDialog(false)}
        handleAnswer={(answer) => setDialogSaveAnswer(answer)}
        preferredAnswer="agree"
      />
      <AlertDialogTemplate
        message={t('alertMessage.deleteGroup')}
        open={openAlertDeleteDialog}
        onClose={() => setOpenAlertDeleteDialog(false)}
        handleAnswer={(answer) => setDialogDeleteAnswer(answer)}
        preferredAnswer="disagree"
      />
      <AlertMessageTemplate
        message={t('alertMessage.saveValidation')}
        open={openAlertMessage}
        onClose={() => setOpenAlertMessage(false)}
      />
    </>
  );
};

export default EditGroupDialog;
