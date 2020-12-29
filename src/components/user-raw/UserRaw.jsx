import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './UserRaw.styles';
import config from '../../appConf';

const { getRole } = config;

const UserRaw = ({ user, role }) => {
  const classes = useStyles();
  const [openHierarchy, setOpenHierarchy] = useState(false);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={`${classes.text} ${user.hierarchyFlat ? classes.hover : ''}`}
          onClick={() => {
            if (user.hierarchyFlat) {
              setOpenHierarchy((prevValue) => !prevValue);
            }
          }}
        >
          <div className={classes.userName}>
            {user.name.firstName}
            {' '}
            {user.name.lastName}
          </div>
          <div className={classes.role}>
            {role.code !== getRole('friend').code && role.displayName}
          </div>
        </Typography>
        {openHierarchy && (
        <Typography
          className={classes.hierarchyFlat}
        >
          {user.hierarchyFlat && user.hierarchyFlat}
        </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default UserRaw;
