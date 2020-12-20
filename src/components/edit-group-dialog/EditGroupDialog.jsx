import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './EditGroupDialog.styles';
import DialogTemplate from '../dialog-template/DialogTemplate';
import UserInputFields from '../users-input-fields/UserInputFields';
import GroupNameInput from '../group-name-input/GroupNameInput';
import GroupDescriptionInput from '../group-description-input/GroupDescriptionInput';
import LockIcon from '../lock-icon/LockIcon';

const EditGroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const [newGroup, setNewGroup] = useState({ ...group });

  // TODO: Add tags inputs and icon

  // TODO: delete
  useEffect(() => {
    console.log(JSON.stringify({ ...newGroup, icon: 'there is an icon don\'t worry' }, null, 2));
  }, [newGroup]);

  const handleSave = () => {
    // TODO: Save editing
    // TODO: Add validation
    onClose();
  };

  const handleDeleteGroup = () => {
    // TODO: Delete group
    // TODO: Add ensuring message
    onClose();
  };

  const setType = (newType) => {
    setNewGroup((prevValue) => {
      return { ...prevValue, type: newType };
    });
  };

  const dialogTitle = () => (
    <div className={classes.title}>
      <GroupNameInput group={newGroup} setGroup={setNewGroup} />
      <LockIcon type={newGroup.type} setType={setType} className={classes.lockIcon} />
    </div>
  );

  const dialogContent = () => (
    <>
      <GroupDescriptionInput group={newGroup} setGroup={setNewGroup} />
      <UserInputFields group={newGroup} setGroup={setNewGroup} />
    </>
  );

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
    <DialogTemplate
      title={dialogTitle()}
      content={dialogContent()}
      actions={dialogActions()}
      open={open}
      onClose={onClose}
    />
  );
};

export default EditGroupDialog;
