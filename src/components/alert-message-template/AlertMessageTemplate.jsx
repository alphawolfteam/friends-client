import React from 'react';
import {
  Slide,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './AlertMessageTemplate.styles';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertMessageTemplate = ({ open, onClose, message }) => {
  const classes = useStyles();
  const { t } = useTranslation();

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
        <Button
          onClick={() => onClose()}
          className={classes.button}
        >
          {t('button.ok')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertMessageTemplate;
