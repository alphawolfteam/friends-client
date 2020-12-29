import React, {
  useState, useEffect, useContext, useMemo,
} from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'react-scrollbars-custom';
import useStyles from './UserInputFields.styles';
import UserRaw from '../user-raw/UserRaw';
import EditableUserRaw from '../editable-user-raw/EditableUserRaw';
import config from '../../appConf';
import UserSearchBar from '../user-search-bar/UserSearchBar';
import UsersService from '../../services/UsersService';
import GroupsService from '../../services/GroupsService';
import userContext from '../../stores/userStore';

const { getRole, getRoleByCode } = config;

const isExist = (usersList, userToCheck) => {
  return usersList.map((user) => user.id).includes(userToCheck.id);
};

const UserInputFields = ({ group, setGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [populatedUsers, setPopulatedUsers] = useState([]);

  const addUser = (newUser, userRoleCode) => {
    setGroup((prevValue) => ({
      ...prevValue,
      users: [
        ...prevValue.users,
        { id: newUser.id, role: userRoleCode },
      ],
    }));
  };

  const usersListToEdit = useMemo(
    () => group.users.filter((groupUser) => groupUser.id !== currentUser.id),
    [group.users, currentUser],
  );

  const sortedUsers = useMemo(() => usersListToEdit.sort((firstUser, secondUser) => {
    return GroupsService.getUserRoleCode(group, firstUser.id)
    - GroupsService.getUserRoleCode(group, secondUser.id);
  }),
  [usersListToEdit]);

  // TODO: On changeing page
  useEffect(async () => {
    // TODO: Populate first 5 users
    setPopulatedUsers(
      await UsersService.getPopulatedUsersList(sortedUsers.map((user) => user.id)),
    );
  }, [sortedUsers]);

  // TODO: (?) Add useEffect that when changing someone from and to be a manager
  // its reset the pages to 1 and populates the users again

  useEffect(() => {
    if (selectedUser && !isExist(group.users, selectedUser)) {
      addUser(selectedUser, getRole('friend').code);
      setSelectedUser(undefined);
    }
  }, [selectedUser]);

  const userInputField = (user) => (
    <div key={user.id} className={classes.field}>
      <EditableUserRaw
        user={user}
        initialRole={getRoleByCode(GroupsService.getUserRoleCode(group, user.id))}
        setGroup={setGroup}
      />
    </div>
  );

  return (
    <>
      <UserSearchBar setSelectedUser={setSelectedUser} />
      <div className={classes.scrollBar}>
        <Scrollbar>
          <div className={classes.fieldList}>
            <div className={classes.field}>
              <UserRaw
                user={currentUser}
                role={getRoleByCode(GroupsService.getUserRoleCode(group, currentUser.id))}
              />
            </div>
            {populatedUsers.length > 0 ? populatedUsers.map((user) => (
              userInputField(user)
            ))
              : (
                <Typography className={classes.message}>
                  {t('message.noFriendsFound')}
                </Typography>
              )}
          </div>
        </Scrollbar>
      </div>
    </>
  );
};

export default UserInputFields;
