import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@material-ui/core';
import config from '../../../appConf';
import useStyles from './RolesSelect.styles';

const RolesSelect = ({ role, onChange }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const rolesObjects = [
    {
      displayName: t('roles.member'),
      value: config.roles.member_role_value,
    },
    {
      displayName: t('roles.manager'),
      value: config.roles.manager_role_value,
    },
  ];

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Select
      disableUnderline
      value={role}
      onChange={(e) => handleOnChange(e)}
      className={classes.root}
    >
      {rolesObjects.map((roleObject) => (
        <MenuItem
          key={roleObject.displayName}
          className={classes.item}
          value={roleObject.value}
        >
          {roleObject.displayName}
        </MenuItem>
      ))}
    </Select>
  );
};

export default RolesSelect;
