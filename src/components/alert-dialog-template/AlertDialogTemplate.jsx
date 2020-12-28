import React from 'react';
import {
  Slide,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
} from '@material-ui/core';
import useStyles from './AlertDialogTemplate.styles';

const Transition = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogTemplate = ({
  open, onClose, handleAnswer, message,
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
      <DialogActions>
        <Button
          onClick={() => {
            handleAnswer('agree');
            onClose();
          }}
          className={classes.button}
        >
          כן :)
        </Button>
        <Button
          onClick={() => {
            handleAnswer('disagree');
            onClose();
          }}
          className={classes.button}
        >
          בעצם לא..
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialogTemplate;
