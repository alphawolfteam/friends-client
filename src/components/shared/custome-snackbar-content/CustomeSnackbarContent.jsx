import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './CustomeSnackbarContent.styles';

const CustomeSnackbarContent = ({ message }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      {message}
    </Typography>
  );
};

export default CustomeSnackbarContent;
