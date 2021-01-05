import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import UserInfo from '../user-info/UserInfo';
import useStyles from './UserRaw.styles';
import config from '../../appConf';

const { getRole, getRoleByCode } = config;

const UserRaw = ({ userObject }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={classes.text}
        >
          <UserInfo userObject={userObject} />
          <div className={classes.role}>
            {userObject.role !== getRole('friend').code
            && getRoleByCode(userObject.role).displayName}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserRaw;
