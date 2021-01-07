import React, { useState } from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import RolesSelect from '../roles-select/RolesSelect';
import useStyles from './UserRawActions.styles';
import { getRoleByDisplayName, getRoleByValue } from '../../utils/sharedFunctions';

const getUserIndex = (usersList, userObjectToFind) => {
  return usersList.map((userObject) => userObject.user.id).indexOf(userObjectToFind.user.id);
};

const UserRawActions = ({ userObject, setGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [role, setRole] = useState(getRoleByValue(userObject.role));

  const handleRemoveUser = () => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList.splice(getUserIndex(usersList, userObject), 1);
      return { ...prevValue, users: usersList };
    });
  };

  const handleChangeRole = (newRoleDisplayName) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      const newRole = getRoleByDisplayName(newRoleDisplayName);
      usersList[getUserIndex(usersList, userObject)].role = newRole.value;
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
          onClick={() => handleRemoveUser()}
        />
      </Tooltip>
    </Typography>
  );
};

export default UserRawActions;
