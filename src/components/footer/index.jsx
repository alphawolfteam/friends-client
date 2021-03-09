import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { ReactComponent as Logo } from '../../utils/images/yesodot_logo.svg';
import useStyles from './index.styles';

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <Logo className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default FooterComponent;
