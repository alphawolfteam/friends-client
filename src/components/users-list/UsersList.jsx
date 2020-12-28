import React, { useState, useEffect } from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { Typography } from '@material-ui/core';
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

  // TODO: Sort the users- managers at the top and bold

  useEffect(async () => {
    // TODO: Send 5 users at a time
    setPopulatedUsers(
      await UsersService.getPopulatedUsersList(users.map((user) => user.id)),
    );
  }, [users]);
  // }, [page]);

  return (
    <div className={classes.root}>
      <Scrollbar>
        <div className={classes.scrollBarContent}>
          {populatedUsers.length > 0 ? (
            populatedUsers.map((user) => (
              <UserRaw
                key={user.id}
                user={user}
                role={getRoleByCode(GroupsService.getUserRoleCode(group, user.id))}
              />
            ))
          ) : (
            <Typography className={classes.message}>
              אין חברים בקבוצה
            </Typography>
          )}
        </div>
      </Scrollbar>
    </div>
  );
};

export default UsersList;
