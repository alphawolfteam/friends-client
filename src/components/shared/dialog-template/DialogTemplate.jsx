import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './DialogTemplate.styles';

const DialogTemplate = ({
  title, content, actions, open, onClose, cancelOnTouchOutside,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={() => {
        if (cancelOnTouchOutside) {
          onClose();
        }
      }}
      classes={{ paper: classes.root }}
    >
      <DialogTitle
        className={classes.dialogTitle}
        disableTypography
      >
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        <IconButton onClick={onClose} className={classes.closeButton}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers className={classes.dialogContent}>
        {content}
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        {actions}
      </DialogActions>
    </Dialog>
  );
};

export default DialogTemplate;
