import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ReactComponent as ReactLogo } from '../../utils/images/logo.svg';
import userContext from '../../stores/userStore';
import useStyles from './AppBar.styles';

const AppBarComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const currentHour = (new Date()).getHours();

  const renderGreeting = () => {
    if (currentHour < 12) {
      return t('timeGreeting.morning');
    }
    if (currentHour < 18) {
      return t('timeGreeting.afternoon');
    }
    return t('timeGreeting.evening');
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <ReactLogo className={classes.logo} />
        <Typography variant="h6" className={classes.username}>
          {renderGreeting()}
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
