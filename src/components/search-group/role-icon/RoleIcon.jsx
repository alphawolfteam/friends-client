import React from 'react';
import { SettingsOutlined, PersonOutline } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import config from '../../../appConf';
import useStyles from './RoleIcon.styles';

const RoleIcon = ({ role }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      {role !== undefined && (
        <div className={classes.root}>
          {role === config.roles.manager_role_value && (
            <Tooltip title={t('tooltip.manager')}>
              <SettingsOutlined className={classes.icon} />
            </Tooltip>
          )}
          {role === config.roles.member_role_value && (
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
