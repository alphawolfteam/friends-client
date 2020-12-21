import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './EditGroupDialog.styles';
import EditableGroupDialogTemplate from '../editable-group-dialog-template/EditableGroupDialogTemplate';

const EditGroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const [newGroup, setNewGroup] = useState({ ...group });

  // TODO: delete
  useEffect(() => {
    console.log('in edit: ', JSON.stringify({ ...newGroup, icon: 'there is an icon don\'t worry' }, null, 2));
  }, [newGroup]);

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
      onClose={onClose}
    />
  );
};

export default EditGroupDialog;
