import React from 'react';
import { Input } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './EditableGroupName.styles';

const GroupNameInput = ({ group, setGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleOnChange = (event) => {
    setGroup((prevValue) => {
      return { ...prevValue, name: event.target.value };
    });
  };

  return (
    <Input
      disableUnderline
      placeholder={t('placeholder.name')}
      value={group.name}
      onChange={(e) => handleOnChange(e)}
      className={classes.root}
    />
  );
};

export default GroupNameInput;
