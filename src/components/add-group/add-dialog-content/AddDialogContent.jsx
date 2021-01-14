import React from 'react';
import UsersInputFields from '../../shared/users-input-fields/UsersInputFields';
import Paging from '../../shared/paging/Paging';
import GroupDescriptionInput from '../group-description-input/GroupDescriptionInput';
import TagsInputFields from '../../shared/tags-input-fields/TagsInputFields';
import {
  setNewGroupUser,
  removeGroupUser,
  setNewGroupUserRole,
  setNewGroupTag,
  removeGroupTag,
} from '../../shared/sharedFunctions';
import useStyles from './AddDialogContent.styles';

const AddDialogContent = ({ newGroup, setNewGroup }) => {
  const classes = useStyles();

  return (
    <Paging pages={[
      <div className={classes.page}>
        <GroupDescriptionInput group={newGroup} setGroup={setNewGroup} />
        <TagsInputFields
          tagsList={newGroup.tags}
          onAdd={(newTag) => setNewGroupTag(setNewGroup, newTag)}
          onRemove={(tagToRemove) => removeGroupTag(setNewGroup, tagToRemove)}
        />
      </div>,
      <UsersInputFields
        groupUsers={newGroup.users}
        onAdd={(userToAdd, role) => setNewGroupUser(setNewGroup, userToAdd, role)}
        onRemove={(user) => removeGroupUser(setNewGroup, user.id)}
        onChangeRole={(user, newRole) => setNewGroupUserRole(
          setNewGroup,
          user.id,
          newRole,
        )}
      />,
    ]}
    />
  );
};

export default AddDialogContent;
