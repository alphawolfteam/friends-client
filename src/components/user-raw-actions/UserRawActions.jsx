import React from 'react';
import { Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
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
      <CustomeTooltip
        title={t('tooltip.delete')}
        element={(
          <Delete
            className={classes.iconButton}
            onClick={() => onRemove()}
          />
        )}
      />
    </Typography>
  );
};

export default UserRawActions;
