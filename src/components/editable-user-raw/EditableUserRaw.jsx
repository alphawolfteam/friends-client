import React, { useState } from 'react';
import {
  Button, Tooltip, Card, CardContent, Typography,
} from '@material-ui/core';
import { Delete, AccountTree } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './EditableUserRaw.styles';
import RolesSelect from '../roles-select/RolesSelect';
import config from '../../appConf';

const { getRoleByDisplayName } = config;

const getUserIndex = (usersList, userToFind) => {
  return usersList.map((user) => user.id).indexOf(userToFind.id);
};

const EditableUserRaw = ({ user, initialRole, setGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [openHierarchy, setOpenHierarchy] = useState(false);
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

  const userName = () => (
    <Typography
      component="span"
      className={`${classes.text} ${user.hierarchyFlat ? classes.hover : ''}`}
    >
      {user.name.firstName}
      {' '}
      {user.name.lastName}
    </Typography>
  );

  const actions = () => (
    <Typography component="span" className={classes.actions}>
      <div className={classes.rolesSelect}>
        <RolesSelect
          role={role.displayName}
          onChange={(newRoleDisplayName) => handleChangeRole(newRoleDisplayName)}
        />
      </div>
      <Tooltip title={t('tooltip.hierarchy')}>
        <Button
          className={classes.iconButton}
          onClick={() => {
            if (user.hierarchyFlat) {
              setOpenHierarchy((prevValue) => !prevValue);
            }
          }}
        >
          <AccountTree />
        </Button>
      </Tooltip>
      <Tooltip title={t('tooltip.delete')}>
        <Button
          className={classes.iconButton}
          onClick={() => handleRemoveUser(user)}
        >
          <Delete />
        </Button>
      </Tooltip>
    </Typography>
  );

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={`${classes.main} ${user.hierarchyFlat ? classes.hover : ''}`}
        >
          {userName()}
          {actions()}
        </Typography>
        {openHierarchy && (
          <Typography
            className={classes.hierarchyFlat}
          >
            {user.hierarchyFlat}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default EditableUserRaw;
