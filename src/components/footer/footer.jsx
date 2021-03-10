import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { ReactComponent as SapirLogo } from '../../utils/images/sapir-logo.svg';
import { ReactComponent as YesodotLogo } from '../../utils/images/yesodot_logo.svg';
import { ReactComponent as TeamLogo } from '../../utils/images/teamLogo.svg';
import useStyles from './footer.styles';

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <SapirLogo className={classes.sapirLogo} />
        <YesodotLogo className={classes.yesodotLogo} />
        <TeamLogo className={classes.teamLogo} />
      </Toolbar>
    </AppBar>
  );
};

export default FooterComponent;
