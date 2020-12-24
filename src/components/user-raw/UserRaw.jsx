import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import useStyles from './UserRaw.styles';
import UserInfo from '../user-info/UserInfo';

const UserRaw = ({ user, isAManager }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent dir="rtl" className={classes.cardContent}>
        <UserInfo user={user} isAManager={isAManager} />
      </CardContent>
    </Card>
  );
};

export default UserRaw;
