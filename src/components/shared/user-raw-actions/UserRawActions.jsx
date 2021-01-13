import React from 'react';
import {
  Typography,
  CircularProgress,
  IconButton,
  Backdrop,
  Tooltip,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import RolesSelect from '../roles-select/RolesSelect';
import useStyles from './UserRawActions.styles';
import { getRoleByDisplayName, getRoleByValue } from '../sharedFunctions';

const UserRawActions = ({
  userObject,
  onRemove,
  onChangeRole,
  isRemoveLoading,
  isUpdateLoading,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Typography component="span" className={classes.root}>
      <div className={classes.rolesSelect}>
        <RolesSelect
          disabled={isUpdateLoading === true}
          role={getRoleByValue(userObject.role).displayName}
          onChange={(newRoleDisplayName) => onChangeRole(
            getRoleByDisplayName(newRoleDisplayName).value,
          )}
        />
        <Backdrop open={isUpdateLoading === true} className={classes.backdrop}>
          <CircularProgress size={20} />
        </Backdrop>
      </div>
      <Tooltip title={t('tooltip.delete')}>
        <IconButton
          disabled={isRemoveLoading === true}
          className={classes.iconButton}
          onClick={() => onRemove()}
        >
          <Delete />
          {isRemoveLoading && (
            <CircularProgress size={30} className={classes.buttonProgress} />
          )}
        </IconButton>
      </Tooltip>
    </Typography>
  );
};

export default UserRawActions;
