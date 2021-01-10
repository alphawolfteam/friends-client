import React from 'react';
import { Fab, Switch } from '@material-ui/core';
import useStyles from './LockIconInput.styles';
import LockIcon from '../lock-icon/LockIcon';

const LockIconInput = ({ type, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab className={classes.lockIcon} onClick={() => onChange(type === 'private' ? 'public' : 'private')}>
        <LockIcon type={type} />
      </Fab>
      <Switch
        size="small"
        checked={type === 'private'}
        color="default"
        onChange={() => onChange(type === 'private' ? 'public' : 'private')}
      />
    </div>
  );
};

export default LockIconInput;
