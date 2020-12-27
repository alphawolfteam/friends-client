import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './EditGroupDialog.styles';
import refreshDataContext from '../../stores/refreshDataStore';
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
  const refreshData = useContext(refreshDataContext);
  const [newGroup, setNewGroup] = useState(getNestedGroupCopy(group));

  const handleSave = async () => {
    // TODO: Add ensuring message
    // TODO: Add validation
    // TODO: Add loader
    await GroupsService.updateGroup(group, newGroup);
    refreshData();
    onClose();
  };

  const handleDeleteGroup = async () => {
    // TODO: Add ensuring message
    // TODO: Add loader
    await GroupsService.deleteGroup(group._id);
    refreshData();
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
