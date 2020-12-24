import React, {
  useState, useEffect, useContext,
} from 'react';
import { Typography } from '@material-ui/core';
import Scrollbar from 'react-scrollbars-custom';
import useStyles from './UserInputFields.styles';
import UserRaw from '../user-raw/UserRaw';
import EditableUserRaw from '../editable-user-raw/EditableUserRaw';
import config from '../../appConf';
import UserSearchBar from '../user-search-bar/UserSearchBar';
import UsersService from '../../services/UsersService';
import GroupsService from '../../services/GroupsService';
import userContext from '../../stores/userStore';

const { rolesEnum } = config;

const isExist = (usersList, userToCheck) => {
  return usersList.map((user) => user.id).includes(userToCheck.id);
};

const UserInputFields = ({ group, setGroup }) => {
  const classes = useStyles();
  const currentUser = useContext(userContext);
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [populatedUsers, setPopulatedUsers] = useState([]);

  const addUser = (newUser, userRole) => {
    setGroup((prevValue) => ({
      ...prevValue,
      users: [
        ...prevValue.users,
        { id: newUser.id, role: userRole },
      ],
    }));
  };

  // TODO: On changeing page
  useEffect(async () => {
    // TODO: Populate first 5 users except of the current user
    setPopulatedUsers(
      await UsersService.getPopulatedUsersList(group.users.map((user) => user.id)),
    );
  }, [group]);

  // TODO: Sort the users- managers at the top and bold
  // TODO: (?) Add useEffect that when changing someone from and to be a manager
  // its reset the pages to 1 and populates the users again

  useEffect(() => {
    if (selectedUser && !isExist(group.users, selectedUser)) {
      addUser(selectedUser, rolesEnum.FRIEND);
      setSelectedUser(undefined);
    }
  }, [selectedUser]);

  const isAManager = (userId) => GroupsService.isAManager(group, userId);

  const userInputField = (user) => (
    <div key={user.id} className={classes.field}>
      <EditableUserRaw user={user} wasAManager={isAManager(user)} setGroup={setGroup} />
    </div>
  );

  return (
    <>
      <UserSearchBar setSelectedUser={setSelectedUser} />
      <div className={classes.scrollBar}>
        <Scrollbar>
          <div className={classes.fieldList}>
            <div className={classes.field}>
              <UserRaw user={currentUser} isAManager />
            </div>
            {populatedUsers.length > 0 ? populatedUsers.map((user) => (
              userInputField(user)
            ))
              : (
                <Typography className={classes.message}>
                  (: אין חברים בקבוצה.. צרפו כמה
                </Typography>
              )}
          </div>
        </Scrollbar>
      </div>
    </>
  );
};

export default UserInputFields;
