import React from 'react';
import useStyles from './GroupNameInput.styles';

const GroupNameInput = ({ group, setGroup }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setGroup((prevValue) => {
      return { ...prevValue, name: event.target.value };
    });
  };

  return (
    <input
      type="text"
      placeholder="שם הקבוצה"
      value={group.name}
      onChange={(e) => handleChange(e)}
      className={classes.root}
    />
  );
};

export default GroupNameInput;
