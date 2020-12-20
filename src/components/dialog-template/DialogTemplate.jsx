import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import Scrollbar from 'react-scrollbars-custom';
import useStyles from './DialogTemplate.styles';

const DialogTemplate = ({
  title, content, actions, open, onClose,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.root,
      }}
    >
      <DialogTitle dir="rtl" onClose={onClose} disableTypography>
        <Typography variant="h4" className={classes.dialogTitle}>
          {title}
        </Typography>
        <IconButton onClick={onClose} className={classes.closeButton}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers className={classes.dialogContent}>
        <Scrollbar>
          {content}
        </Scrollbar>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>{actions}</DialogActions>
    </Dialog>
  );
};

export default DialogTemplate;
