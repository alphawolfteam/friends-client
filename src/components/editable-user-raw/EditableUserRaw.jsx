import React, { useState } from 'react';
import {
  Button, Tooltip, Card, CardContent, Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import useStyles from './EditableUserRaw.styles';
import RolesSelect from '../roles-select/RolesSelect';
import config from '../../appConf';

const { getRoleByDisplayName } = config;

const getUserIndex = (usersList, userToFind) => {
  return usersList.map((user) => user.id).indexOf(userToFind.id);
};

const EditableUserRaw = ({ user, initialRole, setGroup }) => {
  const classes = useStyles();
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
      onClick={() => {
        if (user.hierarchyFlat) {
          setOpenHierarchy((prevValue) => !prevValue);
        }
      }}
    >
      {user.name.firstName}
      {' '}
      {user.name.lastName}
    </Typography>
  );

  const actions = () => (
    <Typography className={classes.actions}>
      <RolesSelect
        role={role.displayName}
        onChange={(newRoleDisplayName) => handleChangeRole(newRoleDisplayName)}
      />
      <Tooltip title="מחיקה">
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
      <CardContent dir="rtl" className={classes.cardContent}>
        <Typography
          component="span"
          className={`${classes.text} ${user.hierarchyFlat ? classes.hover : ''}`}
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
