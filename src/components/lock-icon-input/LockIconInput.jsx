import React from 'react';
import { Fab, Switch } from '@material-ui/core';
import useStyles from './LockIconInput.styles';
import LockIcon from '../lock-icon/LockIcon';

const LockIconInput = ({ newGroup, setNewGroup }) => {
  const classes = useStyles();

  const changeType = () => {
    setNewGroup((prevValue) => {
      const newType = prevValue.type === 'private' ? 'public' : 'private';
      return { ...prevValue, type: newType };
    });
  };

  return (
    <div className={classes.root}>
      <Fab className={classes.lockIcon} onClick={() => changeType()}>
        <LockIcon type={newGroup.type} />
      </Fab>
      <Switch
        size="small"
        checked={newGroup.type === 'private'}
        color="default"
        onChange={() => changeType()}
      />
    </div>
  );
};

export default LockIconInput;
