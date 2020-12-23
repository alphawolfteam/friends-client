import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import useStyles from './AddTagInput.styles';

const AddTagInput = ({ onAdd }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (event) => {
    setInputValue(() => event.target.value);
  };

  const handleOnClick = () => {
    onAdd(inputValue);
  };

  return (
    <div className={classes.root}>
      <Add className={classes.addIcon} onClick={() => handleOnClick()} />
      <InputBase
        dir="rtl"
        placeholder="הוסיפו תגית.."
        onChange={(e) => handleOnChange(e)}
        value={inputValue}
        className={classes.input}
      />
    </div>
  );
};

export default AddTagInput;
