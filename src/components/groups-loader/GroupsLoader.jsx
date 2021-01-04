import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import useStyles from './GroupsLoader.styles';

const GroupsLoader = () => {
  const classes = useStyles();

  const renderGroupRawPlaceholder = () => (
    <Card className={classes.card}>
      <CardContent className={classes.cardBody}>
        <div className={`${classes.item} ${classes.info}`} />
        <div className={classes.main}>
          <div className={`${classes.item} ${classes.name}`} />
          <div className={`${classes.item} ${classes.img}`} />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className={classes.root}>
      {renderGroupRawPlaceholder()}
      {renderGroupRawPlaceholder()}
      {renderGroupRawPlaceholder()}
    </div>
  );
};

export default GroupsLoader;
