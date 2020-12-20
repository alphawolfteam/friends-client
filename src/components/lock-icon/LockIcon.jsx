import React from 'react';
import { Lock, LockOpen } from '@material-ui/icons';
import useStyles from './LockIcon.styles';

const LockIcon = ({ type, setType }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        setType ? (
          <>
            {type === 'private'
              ? <Lock fontSize="large" onClick={() => setType('public')} />
              : <LockOpen fontSize="large" onClick={() => setType('private')} />}
          </>
        ) : (
          <>
            {type === 'private'
              ? (
                <Lock fontSize="large" />
              )
              : (
                <LockOpen fontSize="large" />
              )}
          </>
        )
      }
    </div>
  );
};

export default LockIcon;
