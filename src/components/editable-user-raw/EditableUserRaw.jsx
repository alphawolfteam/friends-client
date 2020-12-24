import React, { useState } from 'react';
import {
  Button, Tooltip, Card, CardContent, Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { ReactComponent as RemoveManagerIcon } from '../../images/removeManagerIcon.svg';
import { ReactComponent as AddManagerIcon } from '../../images/addManagerIcon.svg';
import useStyles from './EditableUserRaw.styles';
import config from '../../appConf';

const { rolesEnum } = config;

const getUserIndex = (usersList, userToFind) => {
  return usersList.map((user) => user.id).indexOf(userToFind.id);
};

const EditableUserRaw = ({ user, wasAManager, setGroup }) => {
  const classes = useStyles();
  const [openHierarchy, setOpenHierarchy] = useState(false);
  const [isAManager, setIsAManager] = useState(wasAManager);

  const handleRemoveUser = (userToRemove) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList.splice(getUserIndex(usersList, userToRemove), 1);
      return { ...prevValue, users: usersList };
    });
  };

  const handleChangeRole = (userToChange, newRole) => {
    setGroup((prevValue) => {
      const usersList = [...prevValue.users];
      usersList[getUserIndex(usersList, userToChange)].role = newRole;
      setIsAManager(newRole === rolesEnum.MANAGER);
      return { ...prevValue, users: usersList };
    });
  };

  const userTitle = () => (
    <Typography
      component="span"
      className={classes.userTitle}
      onClick={() => {
        if (user.hierarchyFlat) {
          setOpenHierarchy((prevValue) => !prevValue);
        }
      }}
    >
      <div className={classes.userName}>
        {user.name.firstName}
        {' '}
        {user.name.lastName}
      </div>
      <div className={classes.manager}>
        {isAManager && 'מנהל/ת'}
      </div>
    </Typography>
  );

  const managerButton = () => (isAManager ? (
    <Tooltip title="הסרה ממנהל">
      <RemoveManagerIcon
        className={classes.iconButton}
        onClick={() => handleChangeRole(user, rolesEnum.FRIEND)}
      />
    </Tooltip>
  ) : (
    <Tooltip title="הוספה למנהל">
      <AddManagerIcon
        className={classes.iconButton}
        onClick={() => handleChangeRole(user, rolesEnum.MANAGER)}
      />
    </Tooltip>
  ));

  const deleteButton = () => (
    <Tooltip title="מחיקה">
      <Button
        className={classes.iconButton}
        onClick={() => handleRemoveUser(user)}
      >
        <Delete />
      </Button>
    </Tooltip>
  );

  const actionButtons = () => (
    <Typography className={classes.actions}>
      {managerButton()}
      {deleteButton()}
    </Typography>
  );

  return (
    <Card className={classes.root}>
      <CardContent dir="rtl" className={classes.cardContent}>
        <Typography
          component="span"
          className={`${classes.text} ${user.hierarchyFlat ? classes.hover : ''}`}
        >
          {userTitle()}
          {actionButtons()}
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
