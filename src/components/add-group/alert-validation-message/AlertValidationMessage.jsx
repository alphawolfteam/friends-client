import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import AlertMessageTemplate from '../../shared/alert-message-template/AlertMessageTemplate';
import useStyles from './AlertValidationMessage.styles';

const AlertValidationMessage = ({ open, onClose, validationArray }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const validationMessage = (
    <Typography component="span" className={classes.message}>
      <Typography component="span" className={classes.title}>
        {t('alertMessage.validationMessage')}
      </Typography>
      <Typography component="span" className={classes.fieldsList}>
        {validationArray.map((validationTitle) => (
          <Typography component="span" key={validationTitle} className={classes.field}>
            { t(`validation.${validationTitle}`)}
          </Typography>
        ))}
      </Typography>
    </Typography>
  );

  return (
    <AlertMessageTemplate
      message={validationMessage}
      open={open}
      onClose={() => onClose()}
    />
  );
};

export default AlertValidationMessage;
