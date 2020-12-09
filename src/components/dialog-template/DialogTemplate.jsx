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
import useStyles from './DialogTemplate.styles';

const DialogTemplate = ({
  title, content, actions, open, onClose,
}) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle dir="rtl" onClose={onClose} disableTypography>
        <Typography variant="h4" className={classes.dialogTitle}>
          {title}
        </Typography>
        <IconButton onClick={onClose} className={classes.closeButton}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent} dividers>
        {content}
      </DialogContent>
      <DialogActions className={classes.dialogActions}>{actions}</DialogActions>
    </Dialog>
  );
};

export default DialogTemplate;
