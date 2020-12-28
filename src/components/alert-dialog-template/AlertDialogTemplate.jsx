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
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogTemplate = ({
  open, onClose, handleAnswer, message, preferredAnswer,
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
          className={preferredAnswer === 'agree' ? classes.mainButton : classes.secondaryButton}
        >
          כן :)
        </Button>
        <Button
          onClick={() => {
            handleAnswer('disagree');
            onClose();
          }}
          className={preferredAnswer === 'disagree' ? classes.mainButton : classes.secondaryButton}
        >
          בעצם לא..
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialogTemplate;
