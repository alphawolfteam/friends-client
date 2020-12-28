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
      {
        type === 'private'
          ? (
            <Tooltip title={t('tooltip.privateGroup')}>
              <Lock fontSize="large" />
            </Tooltip>
          )
          : (
            <Tooltip title={t('tooltip.publicGroup')}>
              <LockOpen fontSize="large" />
            </Tooltip>
          )
      }
    </div>
  );
};

export default LockIcon;
