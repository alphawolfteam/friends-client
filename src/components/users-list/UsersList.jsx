import React from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { Typography } from '@material-ui/core';
import UserRaw from '../user-raw/UserRaw';
import useStyles from './UsersList.styles';

const UsersList = ({ users }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Scrollbar>
        <div className={classes.scrollBarContent}>
          {users.length > 0 ? (
            users.map((user) => <UserRaw key={user.id} user={user} />)
          ) : (
            <Typography className={classes.message}>
              There are no users
            </Typography>
          )}
        </div>
      </Scrollbar>
    </div>
  );
};

export default UsersList;
