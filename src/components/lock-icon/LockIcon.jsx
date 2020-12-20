import React from 'react';
import { Lock, LockOpen } from '@material-ui/icons';
import useStyles from './LockIcon.styles';

const LockIcon = ({ type, setType }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {type === 'private'
        ? (
          <Lock
            fontSize="large"
            onClick={() => {
              if (setType) {
                setType('public');
              }
            }}
          />
        )
        : (
          <LockOpen
            fontSize="large"
            onClick={() => {
              if (setType) {
                setType('public');
              }
            }}
          />
        )}
    </div>
  );
};

export default LockIcon;
