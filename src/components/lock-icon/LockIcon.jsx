import React from 'react';
import { Lock, LockOpen } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import useStyles from './LockIcon.styles';

const LockIcon = ({ type }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        type === 'private'
          ? (
            <Tooltip title="קבוצה פרטית">
              <Lock fontSize="large" />
            </Tooltip>
          )
          : (
            <Tooltip title="קבוצה ציבורית">
              <LockOpen fontSize="large" />
            </Tooltip>
          )
      }
    </div>
  );
};

export default LockIcon;
