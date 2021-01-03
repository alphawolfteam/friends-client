import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
} from '@material-ui/core';
import useStyles from './DialogTemplate.styles';

const DialogTemplate = ({
  title, content, actions, open, onClose, closeButton,
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
      <DialogTitle
        className={classes.dialogTitle}
        onClose={onClose}
        disableTypography
      >
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        {closeButton && <>{closeButton}</>}
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
