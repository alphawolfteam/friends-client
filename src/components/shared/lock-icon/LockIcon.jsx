import React from 'react';
import { Lock, LockOpen } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
import useStyles from './LockIcon.styles';

const LockIcon = ({ type }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {
        type === 'private'
          ? (
            <CustomeTooltip
              title={t('tooltip.privateGroup')}
              element={(
                <Lock className={classes.icon} />
              )}
            />
          )
          : (
            <CustomeTooltip
              title={t('tooltip.publicGroup')}
              element={(
                <LockOpen className={classes.icon} />
              )}
            />
          )
      }
    </div>
  );
};

export default LockIcon;
