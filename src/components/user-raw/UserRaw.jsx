import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './UserRaw.styles';

const UserRaw = ({ user }) => {
  const classes = useStyles();
  const [openHierarchy, setOpenHierarchy] = useState(false);

  return (
    <Card className={classes.root}>
      <CardContent dir="rtl" className={classes.cardContent}>
        <Typography
          className={classes.userName}
          onClick={() => setOpenHierarchy((prevValue) => !prevValue)}
        >
          {user.name.firstName}
          { ' '}
          {user.name.lastName}
        </Typography>
        {openHierarchy && (
          <Typography
            className={classes.hierarchyFlat}
          >
            {user.hierarchyFlat}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default UserRaw;
