import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import UserRawActions from '../user-raw-actions/UserRawActions';
import UserInfo from '../user-info/UserInfo';
import useStyles from './EditableUserRaw.styles';

const EditableUserRaw = ({
  userObject,
  onRemove,
  onChangeRole,
  isRemoveLoading,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
            isRemoveLoading={isRemoveLoading}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EditableUserRaw;
