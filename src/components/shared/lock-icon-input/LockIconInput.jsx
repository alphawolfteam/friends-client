import React from 'react';
import { Fab, Switch, CircularProgress } from '@material-ui/core';
import useStyles from './LockIconInput.styles';
import LockIcon from '../lock-icon/LockIcon';

const LockIconInput = ({ type, onChange, isLoading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        disabled={isLoading}
        className={classes.lockIcon}
        onClick={() => onChange(type === 'private' ? 'public' : 'private')}
      >
        <LockIcon type={type} />
      </Fab>
      { isLoading && <CircularProgress size={60} className={classes.fabProgress} />}
      <Switch
        disabled={isLoading}
        size="small"
        checked={type === 'private'}
        color="primary"
        onChange={() => onChange(type === 'private' ? 'public' : 'private')}
      />
    </div>
  );
};

export default LockIconInput;
