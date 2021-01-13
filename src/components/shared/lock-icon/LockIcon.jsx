import React from 'react';
import { Lock, LockOpen } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './LockIcon.styles';

const LockIcon = ({ type }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {type === 'private'
        ? (
          <Tooltip title={t('tooltip.privateGroup')}>
            <Lock className={classes.icon} />
          </Tooltip>
        )
        : (
          <Tooltip title={t('tooltip.publicGroup')}>
            <LockOpen className={classes.icon} />
          </Tooltip>
        )}
    </div>
  );
};

export default LockIcon;
