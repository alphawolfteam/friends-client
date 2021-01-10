import React from 'react';
import { CircularProgress, Backdrop } from '@material-ui/core';
import useStyles from './CustomeBackdrop.styles';

const CustomeBackdrop = ({ open }) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.root} open={open}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default CustomeBackdrop;
