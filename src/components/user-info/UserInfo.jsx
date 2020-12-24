import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './UserInfo.styles';

const UserInfo = ({ user, isAManager }) => {
  const classes = useStyles();
  const [openHierarchy, setOpenHierarchy] = useState(false);

  return (
    <div className={classes.root}>
      <Typography
        component="span"
        className={`${classes.text} ${user.hierarchyFlat ? classes.hover : ''}`}
        onClick={() => setOpenHierarchy((prevValue) => !prevValue)}
      >
        <div className={classes.userName}>
          {user.name.firstName}
          {' '}
          {user.name.lastName}
        </div>
        <div className={classes.manager}>
          {isAManager && 'מנהל/ת'}
        </div>
      </Typography>
      {openHierarchy && (
      <Typography
        className={classes.hierarchyFlat}
      >
        {user.hierarchyFlat && user.hierarchyFlat}
      </Typography>
      )}
    </div>
  );
};

export default UserInfo;
