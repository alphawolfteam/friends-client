import React from 'react';
import useStyles from './GroupDescriptionInput.styles';

const GroupDescriptionInput = ({ group, setGroup }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setGroup((prevValue) => {
      return { ...prevValue, description: event.target.value };
    });
  };

  return (
    <textarea
      cols="5"
      rows="2"
      placeholder="הוסיפו תיאור.."
      value={group.description}
      dir="rtl"
      onChange={(e) => handleChange(e)}
      className={classes.root}
    />
  );
};

export default GroupDescriptionInput;
