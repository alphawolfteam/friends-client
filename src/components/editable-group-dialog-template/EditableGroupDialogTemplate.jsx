import React from 'react';
import { Fab, Switch, Typography } from '@material-ui/core';
import { Info } from '@material-ui/icons';
import useStyles from './EditableGroupDialogTemplate.styles';
import DialogTemplate from '../dialog-template/DialogTemplate';
import UserInputFields from '../users-input-fields/UserInputFields';
import TagsInputFields from '../tags-input-fields/TagsInputFields';
import GroupNameInput from '../group-name-input/GroupNameInput';
import GroupDescriptionInput from '../group-description-input/GroupDescriptionInput';
import LockIcon from '../lock-icon/LockIcon';
import IconInput from '../icon-input/IconInput';

const EditableGroupDialogTemplate = ({
  newGroup, setNewGroup, open, actions,
}) => {
  const classes = useStyles();

  const changeType = () => {
    setNewGroup((prevValue) => {
      const newType = prevValue.type === 'private' ? 'public' : 'private';
      return { ...prevValue, type: newType };
    });
  };

  const dialogTitle = () => (
    <>
      <IconInput group={newGroup} setGroup={setNewGroup} />
      <div className={classes.dialogTitle}>
        <GroupNameInput group={newGroup} setGroup={setNewGroup} />
        <div className={classes.lock}>
          <Fab className={classes.lockIcon} onClick={() => changeType()}>
            <LockIcon type={newGroup.type} />
          </Fab>
          <Switch
            size="small"
            checked={newGroup.type === 'private'}
            color="default"
            onChange={() => changeType()}
          />
        </div>
      </div>
    </>
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

  return (
    <DialogTemplate
      title={dialogTitle()}
      content={dialogContent()}
      actions={actions}
      open={open}
    />
  );
};

export default EditableGroupDialogTemplate;
