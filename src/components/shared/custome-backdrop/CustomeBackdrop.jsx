import React from 'react';
import { CircularProgress, Backdrop, Dialog } from '@material-ui/core';
import useStyles from './CustomeBackdrop.styles';

const CustomeBackdrop = ({ open }) => {
  const classes = useStyles();

  return (
    <Dialog className={classes.root} open={open}>
      <Backdrop open={open === true} className={classes.backdrop}>
        <CircularProgress color="primary" />
      </Backdrop>
    </Dialog>

  );
};

export default CustomeBackdrop;
