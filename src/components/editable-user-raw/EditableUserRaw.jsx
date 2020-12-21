import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import useStyles from './EditableUserRaw.styles';

const EditableUserRaw = ({ user, isAManager }) => {
  const classes = useStyles();
  const [openHierarchy, setOpenHierarchy] = useState(false);

  return (
    <Card className={classes.root}>
      <CardContent dir="rtl" className={classes.cardContent}>
        <Typography
          component="span"
          className={`${classes.text} ${user.hierarchyFlat ? classes.hover : ''}`}
          onClick={() => {
            if (user.hierarchyFlat) {
              setOpenHierarchy((prevValue) => !prevValue);
            }
          }}
        >
          <div className={classes.userName}>
            {user.name.firstName}
            {' '}
            {user.name.lastName}
          </div>
          <div className={classes.manager}>
            {isAManager && 'מנהל/ת'}
          </div>
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

export default EditableUserRaw;
