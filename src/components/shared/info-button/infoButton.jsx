import React, { useState } from 'react';
import {
  IconButton, Tooltip, Dialog, DialogContent, Typography,
} from '@material-ui/core';
import { Info } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ReactLogo } from '../../../utils/images/logo.svg';
import useStyles from './infoButton.styles';

const InfoButtonn = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Tooltip title={t('tooltip.info')}>
        <IconButton
          className={classes.iconButton}
          onClick={() => setOpenDialog((prevValue) => !prevValue)}
          color="primary"
        >
          <Info className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Dialog open={openDialog} onClose={() => setOpenDialog((prevValue) => !prevValue)}>
        <DialogContent className={classes.content}>
          <ReactLogo className={classes.logo} />
          <Typography className={classes.text}>
            {t('text.info')}
          </Typography>
          <Typography className={classes.message}>
            {t('text.infoMessage')}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InfoButtonn;
