import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './AddTagInput.styles';

const ENTER_CHAR_CODE = 13;
const MIN_TAG_LENGTH = 2;

const AddTagInput = ({ onAdd }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (event) => {
    setInputValue(() => event.target.value);
  };

  const handleOnKeyPress = (event) => {
    if (event.keyCode === ENTER_CHAR_CODE && inputValue.length >= MIN_TAG_LENGTH) {
      onAdd(inputValue.toLowerCase());
      setInputValue('');
    }
  };

  const handleOnClick = () => {
    if (inputValue.length >= MIN_TAG_LENGTH) {
      onAdd(inputValue.toLowerCase());
      setInputValue('');
    }
  };

  return (
    <div className={classes.root}>
      <Add className={classes.addIcon} onClick={() => handleOnClick()} />
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
