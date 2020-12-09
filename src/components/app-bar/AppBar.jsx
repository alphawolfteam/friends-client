import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ReactComponent as ReactLogo } from '../../images/logo.svg';
import { userContext } from '../../stores/userStore';
import useStyles from './AppBar.styles';

const AppBarComponent = () => {
  const classes = useStyles();
  const user = useContext(userContext);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.username}>
          שלום
          {user.name.firstName}
          {user.name.lastName}
        </Typography>
        <ReactLogo className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
