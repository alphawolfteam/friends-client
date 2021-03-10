import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography } from '@material-ui/core';
import UserInfo from '../user-info/UserInfo';
import config from '../../../appConf';
import useStyles from './UserRaw.styles';

const UserRaw = ({ user, role }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={classes.text}
        >
          <UserInfo user={user} />
          <div className={classes.role}>
            {role === config.roles.manager_role_value && t('roles.manager')}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserRaw;
