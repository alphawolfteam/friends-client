import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ReactComponent as ReactLogo } from '../../images/logo.svg';
import useStyles from "./app-bar.styles";

const AppBarComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <ReactLogo className={classes.logo} />
    </AppBar>
  );
}

export default AppBarComponent;