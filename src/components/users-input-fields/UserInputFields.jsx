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

const { rolesEnum } = config;

const isExist = (usersList, userToCheck) => {
  return usersList.map((user) => user.id).includes(userToCheck.id);
};

const UserInputFields = ({ group, setGroup }) => {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState(undefined);

  useEffect(() => {
    if (selectedUser && !isExist(group.users, selectedUser)) {
      setGroup((prevValue) => ({
        ...prevValue,
        users: [
          ...prevValue.users,
          { ...selectedUser, role: rolesEnum.FRIEND },
        ],
      }));
    }
  }, [setGroup, selectedUser]);

  const handleRemoveUser = (index) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList.splice(index, 1);
      return { ...prevValue, users: usersList };
    });
  };

  const handleChangeRole = (index, newRole) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList[index].role = newRole;
      return { ...prevValue, users: usersList };
    });
  };

  const isAManager = (userId) => GroupService.isAManager(group, userId);

  return (
    <>
      <UserSearchBar setSelectedUser={setSelectedUser} />
      <div className={classes.fieldList}>
        <Scrollbar>
          {group.users
            && group.users.map((user, index) => (
              <div key={user.id} className={classes.field}>
                <Tooltip title="מחיקה">
                  <Button
                    className={classes.iconButton}
                    onClick={() => handleRemoveUser(index)}
                  >
                    <Delete />
                  </Button>
                </Tooltip>
                {isAManager(user.id) ? (
                  <Tooltip title="הסרה ממנהל">
                    <RemoveManagerIcon
                      className={classes.iconButton}
                      onClick={() => handleChangeRole(index, rolesEnum.FRIEND)}
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title="הוספה למנהל">
                    <AddManagerIcon
                      className={classes.iconButton}
                      onClick={() => handleChangeRole(index, rolesEnum.MANAGER)}
                    />
                  </Tooltip>
                )}
                <UserRaw user={user} />
              </div>
            ))}
        </Scrollbar>
      </div>
    </>
  );
};

export default UserInputFields;
