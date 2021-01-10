import React from 'react';
import { SettingsOutlined, PersonOutline } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import CustomeTooltip from '../custome-tooltip/CustomeTooltip';
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
            <CustomeTooltip
              title={t('tooltip.manager')}
              className={classes.icon}
              element={(
                <SettingsOutlined />
              )}
            />
          )}
          {role === getRole('member').value && (
            <CustomeTooltip
              title={t('tooltip.member')}
              className={classes.icon}
              element={(
                <PersonOutline />
              )}
            />
          )}
        </div>
      )}
    </>
  );
};

export default RoleIcon;
