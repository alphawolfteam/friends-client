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
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';

const EditUsersListPage = ({ newGroup, setNewGroup }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [removeUserLoaders, setRemoveUserLoaders] = useState([]);
  const [updateUserLoaders, setUpdateUserLoaders] = useState([]);

  const handleAddUser = (userToAdd, role) => {
    setNewGroupUser(setNewGroup, userToAdd, role);
    GroupsService.addUserToGroup(newGroup._id, { id: userToAdd.id, role })
      .catch(() => {
        enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        );
        removeGroupUser(setNewGroup, { user: userToAdd });
      });
  };

  const handleRemoveUser = (userObjectToRemove) => {
    setRemoveUserLoaders((prevValue) => [...prevValue, userObjectToRemove.user.id]);
    GroupsService.removeUserFromGroup(newGroup._id, userObjectToRemove.user.id)
      .then(() => {
        removeGroupUser(setNewGroup, userObjectToRemove);
      })
      .catch(() => {
        enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        );
      }).finally(() => {
        setRemoveUserLoaders((prevValue) => prevValue.filter((id) => (
          id !== userObjectToRemove.user.id)));
      });
  };

  const handleChangeRole = (userObjectToUpdate, newRole) => {
    setUpdateUserLoaders((prevValue) => [...prevValue, userObjectToUpdate.user.id]);
    GroupsService.updateUserRole(newGroup._id, userObjectToUpdate.user.id, newRole)
      .then(() => {
        setNewGroupUserRole(setNewGroup, userObjectToUpdate, newRole);
      })
      .catch(() => {
        enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        );
      }).finally(() => {
        setUpdateUserLoaders((prevValue) => prevValue.filter((id) => (
          id !== userObjectToUpdate.user.id)));
      });
  };

  return (
    <UsersInputFields
      groupUsers={newGroup.users}
      onAdd={handleAddUser}
      onRemove={handleRemoveUser}
      onChangeRole={handleChangeRole}
      removeUserLoaders={removeUserLoaders}
      updateUserLoaders={updateUserLoaders}
    />
  );
};

export default EditUsersListPage;
