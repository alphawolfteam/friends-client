import React, { useState, useEffect } from 'react';
import { Button, Switch, Typography } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import useStyles from './EditGroupDialog.styles';
import DialogTemplate from '../dialog-template/DialogTemplate';
import UserInputFields from '../users-input-fields/UserInputFields';
import TagsInputFields from '../tags-input-fields/TagsInputFields';
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
    // TODO: Add ensuring message
    // TODO: Add validation
    onClose();
  };

  const handleDeleteGroup = () => {
    // TODO: Delete group
    // TODO: Add ensuring message
    onClose();
  };

  const changeType = () => {
    setNewGroup((prevValue) => {
      const newType = prevValue.type === 'public' ? 'private' : 'public';
      return { ...prevValue, type: newType };
    });
  };

  const dialogTitle = () => (
    <div className={classes.dialogTitle}>
      <GroupNameInput group={newGroup} setGroup={setNewGroup} />
      <div className={classes.lock}>
        <LockIcon type={newGroup.type} />
        <Switch
          size="small"
          checked={newGroup.type === 'public'}
          color="default"
          onChange={() => changeType()}
        />
      </div>
    </div>
  );

  const dialogContent = () => (
    <div className={classes.content}>
      <Typography dir="rtl" className={classes.title}>
        <Info className={classes.titleIcon} />
        תיאור
      </Typography>
      <GroupDescriptionInput group={newGroup} setGroup={setNewGroup} />
      <hr />
      <TagsInputFields group={newGroup} setGroup={setNewGroup} />
      <hr />
      <UserInputFields group={newGroup} setGroup={setNewGroup} />
    </div>
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
