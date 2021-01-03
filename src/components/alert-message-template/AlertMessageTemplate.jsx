import React from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './AlertMessageTemplate.styles';
import AlertTemplate from '../alert-template/AlertTemplate';

const AlertMessageTemplate = ({ open, onClose, message }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AlertTemplate
      open={open}
      onClose={onClose}
      message={message}
      actions={(
        <Button
          onClick={() => onClose()}
          className={classes.button}
        >
          {t('button.ok')}
        </Button>
      )}
    />
  );
};

export default AlertMessageTemplate;
