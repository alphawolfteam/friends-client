import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import UserRawActions from '../user-raw-actions/UserRawActions';
import UserInfo from '../user-info/UserInfo';
import useStyles from './EditableUserRaw.styles';

const EditableUserRaw = ({ userObject, onRemove, onChangeRole }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={classes.main}
        >
          <UserInfo userObject={userObject} />
          <UserRawActions
            userObject={userObject}
            onRemove={() => onRemove()}
            onChangeRole={(newRole) => onChangeRole(newRole)}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EditableUserRaw;
