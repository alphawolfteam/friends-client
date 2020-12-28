import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ReactComponent as ReactLogo } from '../../images/logo.svg';
import userContext from '../../stores/userStore';
import useStyles from './AppBar.styles';

const AppBarComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const currentHour = (new Date()).getHours();

  const getGreeting = () => {
    if (currentHour < 12) {
      return t('timeGreeting.morning');
    }
    if (currentHour < 18) {
      return t('timeGreeting.afternoon');
    }
    return t('timeGreeting.evening');
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <ReactLogo className={classes.logo} />
        <Typography variant="h6" className={classes.username}>
          {getGreeting()}
          {', '}
          <strong>
            {currentUser.name.firstName}
            {' '}
            {currentUser.name.lastName}
          </strong>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
