import React, {
  useState, useEffect, useContext, useMemo,
} from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import useStyles from './UsersInputFields.styles';
import UserRaw from '../user-raw/UserRaw';
import EditableUserRaw from '../editable-user-raw/EditableUserRaw';
import AddUserSearchBar from '../add-user-search-bar/AddUserSearchBar';
import GroupsService from '../../../services/GroupsService';
import userContext from '../../../stores/userStore';
import config from '../../../appConf';

const UsersInputFields = ({
  groupUsers,
  onAdd,
  onRemove,
  onChangeRole,
  removeUserLoaders,
  updateUserLoaders,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const currentUser = useContext(userContext);
  const [selectedUser, setSelectedUser] = useState(undefined);

  const usersListToEdit = useMemo(
    () => groupUsers.filter(({ user }) => user.id !== currentUser.genesisId),
    [groupUsers, currentUser],
  );

  const sortedUsers = useMemo(() => usersListToEdit.sort((firstUser, secondUser) => {
    return secondUser.role - firstUser.role;
  }), [usersListToEdit]);

  useEffect(() => {
    if (selectedUser) {
      if (!GroupsService.isUserExist(groupUsers, selectedUser.id)) {
        onAdd(selectedUser, config.roles.member_role_value);
        setSelectedUser(undefined);
      } else {
        enqueueSnackbar(t('error.userAlreadyExist'));
      }
    }
  }, [selectedUser]);

  const renderCurrentUserField = () => (
    <div className={classes.field}>
      <UserRaw
        user={{
          id: currentUser.genesisId,
          firstName: currentUser.name.firstName,
          lastName: currentUser.name.lastName,
        }}
        role={config.roles.manager_role_value}
      />
    </div>
  );

  const renderUsersFields = () => (
    sortedUsers.length > 0 ? sortedUsers.map(({ user, role }) => (
      <div key={user.id} className={classes.field}>
        <EditableUserRaw
          user={user}
          role={role}
          onRemove={() => onRemove(user)}
          onChangeRole={(newRole) => onChangeRole(user, newRole)}
          isRemoveLoading={removeUserLoaders && removeUserLoaders.includes(user.id)}
          isUpdateLoading={updateUserLoaders && updateUserLoaders.includes(user.id)}
        />
      </div>
    ))
      : (
        <Typography className={classes.message}>
          {t('message.noMembersFound')}
        </Typography>
      )
  );

  return (
    <div className={classes.root}>
      <AddUserSearchBar setSelectedUser={setSelectedUser} />
      <div className={classes.scrollBar}>
        {renderCurrentUserField()}
        {renderUsersFields()}
      </div>
    </div>
  );
};

export default UsersInputFields;
