import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './AddTagInput.styles';

const ENTER_CHAR_CODE = 13;

const AddTagInput = ({ onAdd }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (event) => {
    setInputValue(() => event.target.value);
  };

  const handleOnKeyPress = (event) => {
    if (event.keyCode === ENTER_CHAR_CODE) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  const handleOnClick = () => {
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <div className={classes.root}>
      <Add className={classes.addIcon} onClick={() => handleOnClick()} />
      <InputBase
        dir="rtl"
        placeholder={t('tooltip.addTag')}
        onChange={(e) => handleOnChange(e)}
        onKeyDown={(e) => handleOnKeyPress(e)}
        value={inputValue}
        className={classes.input}
      />
    </div>
  );
};

export default AddTagInput;
