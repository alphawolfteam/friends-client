import React from 'react';
import {
  Slide,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
} from '@material-ui/core';
import useStyles from './AlertTemplate.styles';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertTemplate = ({
  open,
  onClose,
  message,
  actions,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      className={classes.root}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => onClose()}
    >
      <DialogContent>
        <DialogContentText className={classes.message}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actions}>
        {actions}
      </DialogActions>
    </Dialog>
  );
};

export default AlertTemplate;
