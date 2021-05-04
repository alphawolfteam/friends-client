import React from 'react';
import { CircularProgress, Backdrop, Dialog } from '@material-ui/core';
import useStyles from './CustomBackdrop.styles';

const CustomBackdrop = ({ open }) => {
  const classes = useStyles();

  return (
    <Dialog className={classes.root} open={open}>
      <Backdrop open className={classes.backdrop}>
        <CircularProgress color="primary" />
      </Backdrop>
    </Dialog>

  );
};

export default CustomBackdrop;
