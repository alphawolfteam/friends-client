import React, { useState, useEffect, useMemo } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import UserRaw from '../user-raw/UserRaw';
import useStyles from './UsersList.styles';
import GroupsService from '../../services/GroupsService';
import UsersService from '../../services/UsersService';
import config from '../../appConf';

const { getRoleByCode } = config;

const UsersList = ({ users, group }) => {
  const classes = useStyles();
  const [populatedUsers, setPopulatedUsers] = useState([]);
  // const [page, setPage] = useState(1);

  const sortedUsers = useMemo(() => users.sort((firstUser, secondUser) => {
    return GroupsService.getUserRoleCode(group, firstUser.id)
    - GroupsService.getUserRoleCode(group, secondUser.id);
  }),
  [users]);

  useEffect(async () => {
    // TODO: Send 5 users at a time
    setPopulatedUsers(
      await UsersService.getPopulatedUsersList(sortedUsers.map((user) => user.id)),
    );
  }, [sortedUsers]);
  // }, [page]);

  return (
    <div className={classes.root}>
      <Scrollbar>
        <div className={classes.scrollBarContent}>
          {populatedUsers.map((user) => (
            <UserRaw
              key={user.id}
              user={user}
              role={getRoleByCode(GroupsService.getUserRoleCode(group, user.id))}
            />
          ))}
        </div>
      </Scrollbar>
    </div>
  );
};

export default UsersList;
