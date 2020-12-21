import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ReactComponent as ReactLogo } from '../../images/logo.svg';
import userContext from '../../stores/userStore';
import useStyles from './AppBar.styles';

const getMessage = (currentHour) => {
  let message;
  if (currentHour < 12) {
    message = 'בוקר טוב';
  } else if (currentHour < 18) {
    message = 'צהריים טובים';
  } else {
    message = 'ערב טוב';
  }
  return message;
};

const AppBarComponent = () => {
  const classes = useStyles();
  const currentUser = useContext(userContext);
  const currentHour = (new Date()).getHours();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <ReactLogo className={classes.logo} />
        <Typography variant="h6" className={classes.username}>
          {getMessage(currentHour)}
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
