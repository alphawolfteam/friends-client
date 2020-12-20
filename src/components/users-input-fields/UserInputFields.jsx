import React, { useState, useEffect } from 'react';
import { Delete } from '@material-ui/icons';
import { Button, Tooltip } from '@material-ui/core';
import Scrollbar from 'react-scrollbars-custom';
import useStyles from './UserInputFields.styles';
import UserRaw from '../user-raw/UserRaw';
import config from '../../appConf';
import { ReactComponent as RemoveManagerIcon } from '../../images/removeManagerIcon.svg';
import { ReactComponent as AddManagerIcon } from '../../images/addManagerIcon.svg';
import UserSearchBar from '../user-search-bar/UserSearchBar';
import GroupService from '../../services/GroupsService';
import UsersService from '../../services/UsersService';

const { rolesEnum } = config;

const isExist = (usersList, userToCheck) => {
  return usersList.map((user) => user.id).includes(userToCheck.id);
};

const getUserIndex = (usersList, userToFind) => {
  return usersList.map((user) => user.id).indexOf(userToFind.id);
};

const UserInputFields = ({ group, setGroup }) => {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [populatedUsers, setPopulatedUsers] = useState([]);

  // TODO: On changeing page
  useEffect(async () => {
    // TODO: Populate first 5 users
    setPopulatedUsers(
      await UsersService.getPopulatedUsersList(group.users.map((user) => user.id)),
    );
  }, [group]);

  // TODO: Sort the users- managers at the top and bold
  // TODO: (?) Add useEffect that when changing someone from and to be a manager
  // its reset the pages to 1 and populates the users again

  useEffect(() => {
    if (selectedUser && !isExist(group.users, selectedUser)) {
      setGroup((prevValue) => ({
        ...prevValue,
        users: [
          ...prevValue.users,
          { id: selectedUser.id, role: rolesEnum.FRIEND },
        ],
      }));
    }
  }, [setGroup, selectedUser]);

  const handleRemoveUser = (userToRemove) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList.splice(getUserIndex(usersList, userToRemove), 1);
      return { ...prevValue, users: usersList };
    });
  };

  const handleChangeRole = (userToChange, newRole) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList[getUserIndex(usersList, userToChange)].role = newRole;
      return { ...prevValue, users: usersList };
    });
  };

  const isAManager = (userId) => GroupService.isAManager(group, userId);

  const managerButton = (user) => (isAManager(user.id) ? (
    <Tooltip title="הסרה ממנהל">
      <RemoveManagerIcon
        className={classes.iconButton}
        onClick={() => handleChangeRole(user, rolesEnum.FRIEND)}
      />
    </Tooltip>
  ) : (
    <Tooltip title="הוספה למנהל">
      <AddManagerIcon
        className={classes.iconButton}
        onClick={() => handleChangeRole(user, rolesEnum.MANAGER)}
      />
    </Tooltip>
  ));

  return (
    <>
      <UserSearchBar setSelectedUser={setSelectedUser} />
      <div className={classes.fieldList}>
        <Scrollbar>
          {populatedUsers.map((user) => (
            <div key={user.id} className={classes.field}>
              <Tooltip title="מחיקה">
                <Button
                  className={classes.iconButton}
                  onClick={() => handleRemoveUser(user)}
                >
                  <Delete />
                </Button>
              </Tooltip>
              {managerButton(user)}
              <UserRaw user={user} />
            </div>
          ))}
        </Scrollbar>
      </div>
    </>
  );
};

export default UserInputFields;
