import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import UserRawActions from '../user-raw-actions/UserRawActions';
import UserInfo from '../user-info/UserInfo';
import useStyles from './EditableUserRaw.styles';

const EditableUserRaw = ({
  user,
  role,
  onRemove,
  onChangeRole,
  isRemoveLoading,
  isUpdateLoading,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={classes.main}
        >
          <UserInfo user={user} />
          <UserRawActions
            role={role}
            onRemove={onRemove}
            onChangeRole={onChangeRole}
            isRemoveLoading={isRemoveLoading}
            isUpdateLoading={isUpdateLoading}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EditableUserRaw;
