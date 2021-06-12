import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import UsersInputFields from '../../shared/users-input-fields/UsersInputFields';
import {
  setNewGroupUser,
  removeGroupUser,
  setNewGroupUserRole,
} from '../../shared/sharedFunctions';
import GroupsService from '../../../services/GroupsService';

const EditUsersListPage = ({ group, setGroup }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [removeUserLoaders, setRemoveUserLoaders] = useState([]);
  const [updateUserLoaders, setUpdateUserLoaders] = useState([]);

  const handleAddUser = (userToAdd, role) => {
    setNewGroupUser(setGroup, userToAdd, role);
    GroupsService.addUserToGroup(group._id, { id: userToAdd.id, role })
      .then(() => {
        enqueueSnackbar(t('success.addUser'), { variant: 'success' });
      })
      .catch(() => {
        enqueueSnackbar(t('error.server'), { variant: 'error' });
        removeGroupUser(setGroup, userToAdd.id);
      });
  };

  const handleRemoveUser = (user) => {
    setRemoveUserLoaders((prevValue) => [...prevValue, user.id]);
    GroupsService.removeUserFromGroup(group._id, user.id)
      .then(() => {
        removeGroupUser(setGroup, user.id);
        enqueueSnackbar(t('success.removeUser'), { variant: 'success' });
      })
      .catch(() => {
        enqueueSnackbar(t('error.server'), { variant: 'error' });
      }).finally(() => {
        setRemoveUserLoaders((prevValue) => prevValue.filter((id) => (id !== user.id)));
      });
  };

  const handleChangeRole = (user, newRole) => {
    setUpdateUserLoaders((prevValue) => [...prevValue, user.id]);
    GroupsService.updateUserRole(group._id, user.id, newRole)
      .then(() => {
        setNewGroupUserRole(setGroup, user.id, newRole);
        enqueueSnackbar(t('success.role'), { variant: 'success' });
      })
      .catch(() => {
        enqueueSnackbar(t('error.server'), { variant: 'error' });
      }).finally(() => {
        setUpdateUserLoaders((prevValue) => prevValue.filter((id) => (id !== user.id)));
      });
  };

  return (
    <UsersInputFields
      groupUsers={group.users}
      groupId={group._id}
      onAdd={handleAddUser}
      onRemove={handleRemoveUser}
      onChangeRole={handleChangeRole}
      removeUserLoaders={removeUserLoaders}
      updateUserLoaders={updateUserLoaders}
    />
  );
};

export default EditUsersListPage;
