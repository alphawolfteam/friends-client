import React from 'react';
import { Card } from '@material-ui/core';
import useStyles from './AutocompleteLoader.styles';

const AutocompleteLoader = () => {
  const classes = useStyles();

  const renderRawPlaceholder = () => (
    <Card className={classes.optionCard}>
      <div>
        <div className={`${classes.item} ${classes.raw}`} />
        <div className={`${classes.item} ${classes.raw}`} />
      </div>
      <div className={`${classes.item} ${classes.icon}`} />
    </Card>
  );

  return (
    <div className={classes.root}>
      <div className={classes.optionsDiv}>
        {renderRawPlaceholder()}
        {renderRawPlaceholder()}
        {renderRawPlaceholder()}
      </div>
    </div>
  );
};

export default AutocompleteLoader;
