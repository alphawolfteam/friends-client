import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import config from '../../appConf';
import useStyles from './RolesSelect.styles';

const { roles } = config;

const RolesSelect = ({ role, onChange }) => {
  const classes = useStyles();

  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <Select
      value={role}
      onChange={(e) => handleOnChange(e)}
      className={classes.root}
    >
      {roles.map((currentRole) => (
        <MenuItem
          key={currentRole.displayName}
          className={classes.item}
          value={currentRole.displayName}
        >
          {currentRole.displayName}
        </MenuItem>
      ))}
    </Select>
  );
};

export default RolesSelect;
