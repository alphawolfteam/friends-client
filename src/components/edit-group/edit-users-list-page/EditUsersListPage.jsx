import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import OptionsInputFields from '../../shared/options-input-fields/OptionsInputFields';
import {
  setNewGroupUser,
  removeGroupUser,
  setNewGroupUserRole,
} from '../../shared/sharedFunctions';
import GroupsService from '../../../services/GroupsService';
import AlertDialogTemplate from '../../shared/alert-dialog-template/AlertDialogTemplate';

const EditUsersListPage = ({ group, setGroup }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [removeUserLoaders, setRemoveUserLoaders] = useState([]);
  const [updateUserLoaders, setUpdateUserLoaders] = useState([]);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [selectedUsersLength, setSelectedUsersLength] = useState(0);

  const resolveDialog = useRef(null);

  const handleAddUser = (userToAdd, role, suppressSnackbar) => {
    setNewGroupUser(setGroup, userToAdd, role);
    GroupsService.addUserToGroup(group._id, { id: userToAdd.id, role })
      .then(() => !suppressSnackbar && enqueueSnackbar(t('success.addUser'), { variant: 'success' }))
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

  const showCopyGroupWarning = (length) => {
    setOpenConfirmationDialog(true);
    setSelectedUsersLength(length);

    return new Promise((resolve) => {
      resolveDialog.current = resolve;
    });
  };

  const handleConfirmationDialogClose = () => {
    setOpenConfirmationDialog(false);
    resolveDialog.current(false);
  };

  const handleConfirmationDialogAnswer = (answer) => resolveDialog.current(answer === 'agree');

  return (
    <>
      <OptionsInputFields
        groupUsers={group.users}
        groupId={group._id}
        onAdd={handleAddUser}
        onRemove={handleRemoveUser}
        onChangeRole={handleChangeRole}
        removeUserLoaders={removeUserLoaders}
        updateUserLoaders={updateUserLoaders}
        showCopyGroupWarning={showCopyGroupWarning}
      />
      <AlertDialogTemplate
        open={openConfirmationDialog}
        onClose={handleConfirmationDialogClose}
        handleAnswer={handleConfirmationDialogAnswer}
        message={t('alertMessage.addUsersMessage', {
          usersLength: selectedUsersLength,
        })}
        preferredAnswer="agree"
      />
    </>
  );
};

export default EditUsersListPage;
