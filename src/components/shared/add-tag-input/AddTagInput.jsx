import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './AddTagInput.styles';

const ENTER_CHAR_CODE = 13;

const AddTagInput = ({ onAdd, isValidated }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (event) => {
    setInputValue(() => event.target.value);
  };

  const handleOnKeyPress = (event) => {
    const newTag = inputValue.toLowerCase();
    if (event.keyCode === ENTER_CHAR_CODE && isValidated(newTag)) {
      onAdd(newTag);
      setInputValue('');
    }
  };

  const handleOnClick = () => {
    const newTag = inputValue.toLowerCase();
    if (isValidated(newTag)) {
      onAdd(newTag);
      setInputValue('');
    }
  };

  return (
    <div className={classes.root}>
      <Add
        className={classes.addIcon}
        onClick={() => handleOnClick()}
      />
      <InputBase
        placeholder={t('placeholder.addTag')}
        onChange={(e) => handleOnChange(e)}
        onKeyDown={(e) => handleOnKeyPress(e)}
        value={inputValue.toLowerCase()}
        className={classes.input}
      />
    </div>
  );
};

export default AddTagInput;
