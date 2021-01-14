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

const UserRawActions = ({
  role,
  onRemove,
  onChangeRole,
  isRemoveLoading,
  isUpdateLoading,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const renderRolesSelect = () => (
    <>
      <RolesSelect
        disabled={isUpdateLoading === true}
        role={role}
        onChange={onChangeRole}
      />
      <Backdrop open={isUpdateLoading === true} className={classes.backdrop}>
        <CircularProgress size={20} />
      </Backdrop>
    </>
  );

  const renderDeleteButton = () => (
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
  );

  return (
    <Typography component="span" className={classes.root}>
      <div className={classes.rolesSelect}>
        {renderRolesSelect()}
      </div>
      <Tooltip title={t('tooltip.delete')}>
        {renderDeleteButton()}
      </Tooltip>
    </Typography>
  );
};

export default UserRawActions;
