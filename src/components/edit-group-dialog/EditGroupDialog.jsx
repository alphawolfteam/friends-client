import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './EditGroupDialog.styles';
import EditableGroupDialogTemplate from '../editable-group-dialog-template/EditableGroupDialogTemplate';
import GroupsService from '../../services/GroupsService';

const getNestedGroupCopy = (group) => {
  return {
    ...group,
    users: [...group.users.map((user) => {
      return { ...user };
    })],
  };
};

const EditGroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const [newGroup, setNewGroup] = useState(getNestedGroupCopy(group));

  const handleSave = () => {
    // TODO: Add ensuring message
    // TODO: Add validation
    GroupsService.updateGroup(group, newGroup);
    onClose();
  };

  const handleDeleteGroup = () => {
    // TODO: Add ensuring message
    GroupsService.deleteGroup(group._id);
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
