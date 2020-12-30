import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Tooltip,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { AccountTree } from '@material-ui/icons';
import useStyles from './UserRaw.styles';
import config from '../../appConf';

const { getRole } = config;

const UserRaw = ({ user, role }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [openHierarchy, setOpenHierarchy] = useState(false);

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          component="span"
          className={classes.text}
        >
          <div className={classes.userName}>
            {user.name.firstName}
            {' '}
            {user.name.lastName}
          </div>
          <div className={classes.role}>
            {role.code !== getRole('friend').code && role.displayName}
            {user.hierarchyFlat && (
            <Tooltip title={t('tooltip.hierarchy')}>
              <Button
                className={classes.iconButton}
                onClick={() => {
                  if (user.hierarchyFlat) {
                    setOpenHierarchy((prevValue) => !prevValue);
                  }
                }}
              >
                <AccountTree />
              </Button>
            </Tooltip>
            )}
          </div>
        </Typography>
        {openHierarchy && (
        <Typography
          className={classes.hierarchyFlat}
        >
          {user.hierarchyFlat && user.hierarchyFlat}
        </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default UserRaw;
