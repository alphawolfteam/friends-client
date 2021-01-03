import React, { useState } from 'react';
import {
  Tooltip, Card, CardContent, Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import RolesSelect from '../roles-select/RolesSelect';
import UserInfo from '../user-info/UserInfo';
import useStyles from './EditableUserRaw.styles';
import config from '../../appConf';

const { getRoleByDisplayName } = config;

const getUserIndex = (usersList, userToFind) => {
  return usersList.map((user) => user.id).indexOf(userToFind.id);
};

const EditableUserRaw = ({ user, initialRole, setGroup }) => {
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

  const actions = () => (
    <Typography component="span" className={classes.actions}>
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

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={classes.main}
        >
          <UserInfo user={user} />
          {actions()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EditableUserRaw;
