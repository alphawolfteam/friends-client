import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './EditGroupDialog.styles';
import refreshDataContext from '../../stores/refreshDataStore';
import EditableGroupDialogTemplate from '../../components/editable-group-dialog-template/EditableGroupDialogTemplate';
import AlertDialogTemplate from '../../components/alert-dialog-template/AlertDialogTemplate';
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
  const classes = useStyles();
  const refreshData = useContext(refreshDataContext);
  const [openAlertSaveDialog, setAlertSaveDialog] = useState(false);
  const [dialogSaveAnswer, setDialogSaveAnswer] = useState(undefined);
  const [openAlertDeleteDialog, setAlertDeleteDialog] = useState(false);
  const [dialogDeleteAnswer, setDialogDeleteAnswer] = useState(undefined);

  const [newGroup, setNewGroup] = useState(getNestedGroupCopy(group));

  useEffect(async () => {
    // TODO: Add loader
    if (dialogSaveAnswer === 'agree') {
      await GroupsService.updateGroup(group, newGroup);
      refreshData();
      onClose();
    }
  }, [dialogSaveAnswer]);

  useEffect(async () => {
    // TODO: Add loader
    if (dialogDeleteAnswer === 'agree') {
      await GroupsService.deleteGroup(group._id);
      refreshData();
      onClose();
    }
  }, [dialogDeleteAnswer]);

  const handleSave = () => {
    if (newGroup.name && newGroup.description && newGroup.users.length > 1) {
      setAlertSaveDialog(true);
    }
  };

  const handleDeleteGroup = () => {
    setAlertDeleteDialog(true);
  };

  const dialogActions = () => (
    <>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => handleSave()}
      >
        שמור
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => onCancel()}
      >
        ביטול
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => handleDeleteGroup()}
      >
        מחיקת קבוצה
      </Button>
    </>
  );

  return (
    <>
      <EditableGroupDialogTemplate
        newGroup={newGroup}
        setNewGroup={setNewGroup}
        actions={dialogActions()}
        open={open}
        onClose={onClose}
      />
      <AlertDialogTemplate
        message="נראה טוב! לשמור את השינויים?"
        open={openAlertSaveDialog}
        onClose={() => setAlertSaveDialog(false)}
        handleAnswer={(answer) => setDialogSaveAnswer(answer)}
        preferredAnswer="agree"
      />
      <AlertDialogTemplate
        message="אוי חבל.. למחוק את הקבוצה?"
        open={openAlertDeleteDialog}
        onClose={() => setAlertDeleteDialog(false)}
        handleAnswer={(answer) => setDialogDeleteAnswer(answer)}
        preferredAnswer="disagree"
      />
    </>
  );
};

export default EditGroupDialog;
