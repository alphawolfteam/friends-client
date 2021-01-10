import React from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import RolesSelect from '../roles-select/RolesSelect';
import useStyles from './UserRawActions.styles';
import { getRoleByDisplayName, getRoleByValue } from '../../utils/sharedFunctions';

const UserRawActions = ({ userObject, onRemove, onChangeRole }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Typography component="span" className={classes.root}>
      <div className={classes.rolesSelect}>
        <RolesSelect
          role={getRoleByValue(userObject.role).displayName}
          onChange={(newRoleDisplayName) => onChangeRole(
            getRoleByDisplayName(newRoleDisplayName).value,
          )}
        />
      </div>
      <Tooltip title={t('tooltip.delete')}>
        <Delete
          className={classes.iconButton}
          onClick={() => onRemove()}
        />
      </Tooltip>
    </Typography>
  );
};

export default UserRawActions;
