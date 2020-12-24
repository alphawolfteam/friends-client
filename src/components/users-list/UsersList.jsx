import React from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { Typography } from '@material-ui/core';
import UserRaw from '../user-raw/UserRaw';
import useStyles from './UsersList.styles';
import GroupsService from '../../services/GroupsService';
import config from '../../appConf';

const { getRoleByCode } = config;

const UsersList = ({ users, group }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Scrollbar>
        <div className={classes.scrollBarContent}>
          {users.length > 0 ? (
            users.map((user) => (
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
