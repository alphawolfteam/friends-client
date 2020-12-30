import React from 'react';
import useStyles from './EditableGroupDialogTemplate.styles';
import DialogTemplate from '../dialog-template/DialogTemplate';
import UserInputFields from '../users-input-fields/UserInputFields';
import TagsInputFields from '../tags-input-fields/TagsInputFields';
import GroupNameInput from '../group-name-input/GroupNameInput';
import GroupDescriptionInput from '../group-description-input/GroupDescriptionInput';
import IconInput from '../icon-input/IconInput';
import LockIconInput from '../lock-icon-input/LockIconInput';
import Paging from '../paging/Paging';

const EditableGroupDialogTemplate = ({
  newGroup, setNewGroup, open, onClose, actions,
}) => {
  const classes = useStyles();

  const dialogTitle = () => (
    <>
      <IconInput group={newGroup} setGroup={setNewGroup} />
      <div className={classes.dialogTitle}>
        <GroupNameInput group={newGroup} setGroup={setNewGroup} />
        <LockIconInput newGroup={newGroup} setNewGroup={setNewGroup} />
      </div>
    </>
  );

  const firstPage = () => (
    <UserInputFields group={newGroup} setGroup={setNewGroup} />
  );

  const secondPage = () => (
    <>
      <GroupDescriptionInput group={newGroup} setGroup={setNewGroup} />
      <TagsInputFields group={newGroup} setGroup={setNewGroup} />
    </>
  );

  const dialogContent = () => (
    <Paging pages={[firstPage(), secondPage()]} />
  );

  return (
    <DialogTemplate
      title={dialogTitle()}
      content={dialogContent()}
      actions={actions}
      open={open}
      onClose={onClose}
    />
  );
};

export default EditableGroupDialogTemplate;
