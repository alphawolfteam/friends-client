import React from 'react';
import { TextField } from '@material-ui/core';
import useStyles from './GroupDescriptionInput.styles';

const GroupDescriptionInput = ({ group, setGroup }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setGroup((prevValue) => {
      return { ...prevValue, description: event.target.value };
    });
  };

  return (
    <TextField
      id="name"
      helperText="תיאור הקבוצה"
      value={group.description}
      variant="outlined"
      multiline
      rows="2"
      dir="rtl"
      onChange={(e) => handleChange(e)}
      className={classes.root}
    />
  );
};

export default GroupDescriptionInput;
