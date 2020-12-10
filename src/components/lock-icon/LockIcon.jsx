import React from 'react';
import { Lock, LockOpen } from '@material-ui/icons';
import useStyles from './LockIcon.styles';

const LockIcon = ({ type, setType }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {type === 'private'
        ? <Lock onClick={() => setType('public')} />
        : <LockOpen onClick={() => setType('private')} />}
    </div>
  );
};

export default LockIcon;
