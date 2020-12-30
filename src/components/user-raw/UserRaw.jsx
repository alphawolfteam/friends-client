import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Tooltip,
} from '@material-ui/core';
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
          <div className={classes.info}>
            {user.name.firstName}
            {' '}
            {user.name.lastName}
            <Tooltip title={user.hierarchyFlat}>
              <div className={classes.hierarchy}>
                {user.hierarchyFlat}
              </div>
            </Tooltip>
          </div>
          <div className={classes.role}>
            {role.code !== getRole('friend').code && role.displayName}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserRaw;
