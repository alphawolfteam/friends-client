import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './EditGroupDialog.styles';
import EditableGroupDialogTemplate from '../editable-group-dialog-template/EditableGroupDialogTemplate';

const EditGroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const [newGroup, setNewGroup] = useState({ ...group });

  const handleSave = () => {
    // TODO: Save editing
    // TODO: Add ensuring message
    // TODO: Add validation
    onClose();
  };

  const handleDeleteGroup = () => {
    // TODO: Delete group
    // TODO: Add ensuring message
    onClose();
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
        onClick={() => onClose()}
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
    <EditableGroupDialogTemplate
      newGroup={newGroup}
      setNewGroup={setNewGroup}
      actions={dialogActions()}
      open={open}
    />
  );
};

export default EditGroupDialog;
