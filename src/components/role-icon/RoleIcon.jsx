import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Star, StarBorder } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './RoleIcon.styles';
import config from '../../appConf';

const { getRole } = config;

const RoleIcon = ({ role }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      {role === getRole('manager').code && (
        <Tooltip title={t('tooltip.managerRole')}>
          <Star className={classes.icon} />
        </Tooltip>
      )}
      {role === getRole('friend').code && (
        <Tooltip title={t('tooltip.friendRole')}>
          <StarBorder className={classes.icon} />
        </Tooltip>
      )}
    </>
  );
};

export default RoleIcon;
