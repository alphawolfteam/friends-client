import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './UserRaw.styles';

const UserRaw = ({ user }) => {
  const classes = useStyles();
  const [openDescription, setOpenDescription] = useState(false);

  return (
    <Card className={classes.root}>
      <CardContent dir="rtl" className={classes.cardContent}>
        <Typography
          className={classes.userName}
          onClick={() => setOpenDescription((prevValue) => !prevValue)}
        >
          {user.name.firstName}
          {' '}
          {user.name.lastName}
        </Typography>
        {openDescription && (
          <Typography
            className={classes.description}
          >
            {user.description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default UserRaw;
