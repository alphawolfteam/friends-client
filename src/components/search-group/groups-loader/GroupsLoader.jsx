import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import useStyles from './GroupsLoader.styles';

const GroupsLoader = () => {
  const classes = useStyles();

  const renderGroupRawPlaceholder = () => (
    <Card className={classes.card}>
      <CardContent className={classes.cardBody}>
        <Skeleton variant="rect" className={classes.info} />
        <div className={classes.main}>
          <div className={classes.title}>
            <Skeleton variant="text" className={classes.name} />
            <Skeleton variant="text" className={classes.id} />
          </div>
          <Skeleton variant="circle" className={classes.img} />
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
