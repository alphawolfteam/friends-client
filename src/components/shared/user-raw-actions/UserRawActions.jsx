import React from 'react';
import { Typography, CircularProgress, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
import RolesSelect from '../roles-select/RolesSelect';
import useStyles from './UserRawActions.styles';
import { getRoleByDisplayName, getRoleByValue } from '../sharedFunctions';

const UserRawActions = ({
  userObject,
  onRemove,
  onChangeRole,
  isRemoveLoading,
}) => {
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
      <CustomeTooltip
        title={t('tooltip.delete')}
        element={(
          <>
            <IconButton
              disabled={isRemoveLoading === true}
              className={classes.iconButton}
              onClick={() => onRemove()}
            >
              <Delete />
              {isRemoveLoading
                && <CircularProgress size={30} className={classes.buttonProgress} />}
            </IconButton>
          </>
        )}
      />
    </Typography>
  );
};

export default UserRawActions;
