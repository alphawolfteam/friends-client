import React from 'react';
import { Tooltip } from '@material-ui/core';
import useStyles from './UserInfo.styles';

const UserRaw = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {user.name.firstName}
      {' '}
      {user.name.lastName}
      {user.hierarchyFlat && (
        <Tooltip title={user.hierarchyFlat}>
          <div className={classes.hierarchy}>
            {user.hierarchyFlat}
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default UserRaw;
