import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import UserInfo from '../user-info/UserInfo';
import useStyles from './UserRaw.styles';
import config from '../../appConf';

const { getRole } = config;

const UserRaw = ({ user, role }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={classes.text}
        >
          <UserInfo user={user} />
          <div className={classes.role}>
            {role.code !== getRole('friend').code && role.displayName}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserRaw;
