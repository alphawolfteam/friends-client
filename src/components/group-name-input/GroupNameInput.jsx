import React from 'react';
import { Input } from '@material-ui/core';
import useStyles from './GroupNameInput.styles';

const GroupNameInput = ({ group, setGroup }) => {
  const classes = useStyles();

  const handleOnChange = (event) => {
    setGroup((prevValue) => {
      return { ...prevValue, name: event.target.value };
    });
  };

  return (
    <Input
      disableUnderline
      placeholder="הוסיפו שם.."
      value={group.name}
      dir="rtl"
      onChange={(e) => handleOnChange(e)}
      className={classes.root}
    />
  );
};

export default GroupNameInput;
