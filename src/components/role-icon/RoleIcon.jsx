import React from 'react';
import { SettingsOutlined, PersonOutline } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@material-ui/core';
import useStyles from './RoleIcon.styles';
import { getRole } from '../../utils/sharedFunctions';

const RoleIcon = ({ role }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      {role !== undefined && (
        <div className={classes.root}>
          {role === getRole('manager').value && (
            <Tooltip className={classes.icon} title={t('tooltip.manager')}>
              <SettingsOutlined />
            </Tooltip>
          )}
          {role === getRole('member').value && (
            <Tooltip className={classes.icon} title={t('tooltip.member')}>
              <PersonOutline />
            </Tooltip>
          )}
        </div>
      )}
    </>
  );
};

export default RoleIcon;
