import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import useStyles from './TextDivider.styles';

const TextDivider = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.dividerText}>
        {text}
      </Typography>
      <Divider className={classes.divider} />
    </div>
  );
};

export default TextDivider;
