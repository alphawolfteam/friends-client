import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import UserRawActions from '../user-raw-actions/UserRawActions';
import UserInfo from '../user-info/UserInfo';
import useStyles from './EditableUserRaw.styles';
import ExistTransition from '../exist-transition/ExistTransition';

const duration = 300;

const EditableUserRaw = ({ userObject, onRemove, onChangeRole }) => {
  const classes = useStyles();
  const [inProp, setInProp] = useState(true);

  const userRawElement = (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={classes.main}
        >
          <UserInfo userObject={userObject} />
          <UserRawActions
            userObject={userObject}
            onRemove={() => {
              setInProp(false);
              setTimeout(() => {
                onRemove();
              }, duration);
            }}
            onChangeRole={(newRole) => onChangeRole(newRole)}
          />
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <ExistTransition
      element={userRawElement}
      duration={duration}
      inProp={inProp}
    />
  );
};

export default EditableUserRaw;
