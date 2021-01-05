import React from 'react';
import { Tooltip } from '@material-ui/core';
import useStyles from './UserInfo.styles';

const UserRaw = ({ userObject }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {userObject.user.fullName}
      {userObject.user.hierarchyFlat && (
        <Tooltip title={userObject.user.hierarchyFlat}>
          <div className={classes.hierarchy}>
            {userObject.user.hierarchyFlat}
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default UserRaw;
