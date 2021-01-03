import React, { useState } from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import RolesSelect from '../roles-select/RolesSelect';
import useStyles from './UserRawActions.styles';
import config from '../../appConf';

const { getRoleByDisplayName } = config;

const getUserIndex = (usersList, userToFind) => {
  return usersList.map((user) => user.id).indexOf(userToFind.id);
};

const UserRawActions = ({ user, initialRole, setGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [role, setRole] = useState(initialRole);

  const handleRemoveUser = (userToRemove) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList.splice(getUserIndex(usersList, userToRemove), 1);
      return { ...prevValue, users: usersList };
    });
  };

  const handleChangeRole = (newRoleDisplayName) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      const newRole = getRoleByDisplayName(newRoleDisplayName);
      usersList[getUserIndex(usersList, user)].role = newRole.code;
      setRole(newRole);
      return { ...prevValue, users: usersList };
    });
  };

  return (
    <Typography component="span" className={classes.root}>
      <div className={classes.rolesSelect}>
        <RolesSelect
          role={role.displayName}
          onChange={(newRoleDisplayName) => handleChangeRole(newRoleDisplayName)}
        />
      </div>
      <Tooltip title={t('tooltip.delete')}>
        <Delete
          className={classes.iconButton}
          onClick={() => handleRemoveUser(user)}
        />
      </Tooltip>
    </Typography>
  );
};

export default UserRawActions;
