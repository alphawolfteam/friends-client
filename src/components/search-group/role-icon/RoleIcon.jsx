import React from 'react';
import { SettingsOutlined, PersonOutline } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './RoleIcon.styles';
import { getRole } from '../../shared/sharedFunctions';

const RoleIcon = ({ role }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      {role !== undefined && (
        <div className={classes.root}>
          {role === getRole('manager').value && (
            <Tooltip title={t('tooltip.manager')}>
              <SettingsOutlined className={classes.icon} />
            </Tooltip>
          )}
          {role === getRole('member').value && (
            <Tooltip title={t('tooltip.member')}>
              <PersonOutline className={classes.icon} />
            </Tooltip>
          )}
        </div>
      )}
    </>
  );
};

export default RoleIcon;
