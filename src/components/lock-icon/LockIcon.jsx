import React from 'react';
import { Lock, LockOpen } from '@material-ui/icons';
import useStyles from './LockIcon.styles';

const LockIcon = ({ type }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {type === 'private' ? <Lock /> : <LockOpen />}
    </div>
  );
};

export default LockIcon;
