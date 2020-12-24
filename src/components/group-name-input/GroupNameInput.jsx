import React from 'react';
import { InputBase } from '@material-ui/core';
import useStyles from './GroupNameInput.styles';

const GroupNameInput = ({ group, setGroup }) => {
  const classes = useStyles();

  const handleOnChange = (event) => {
    setGroup((prevValue) => {
      return { ...prevValue, name: event.target.value };
    });
  };

  return (
    // <div className={classes.root}>
    <InputBase
      id="groupName"
      placeholder="הוסיפו שם.."
      dir="rtl"
      value={group.name}
      onChange={(e) => handleOnChange(e)}
      className={classes.root}
    />
    // </div>
  );
};

export default GroupNameInput;
