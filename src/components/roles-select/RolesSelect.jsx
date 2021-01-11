import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import config from '../../appConf';
import useStyles from './RolesSelect.styles';

const { roles_objects } = config;

const RolesSelect = ({ role, onChange }) => {
  const classes = useStyles();

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
      {roles_objects.map((roleObject) => (
        <MenuItem
          key={roleObject.displayName}
          className={classes.item}
          value={roleObject.displayName}
        >
          {roleObject.displayName}
        </MenuItem>
      ))}
    </Select>
  );
};

export default RolesSelect;
