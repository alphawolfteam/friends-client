import React from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import AlertTemplate from '../alert-template/AlertTemplate';

const AlertMessageTemplate = ({ open, onClose, message }) => {
  const { t } = useTranslation();

  return (
    <AlertTemplate
      open={open}
      onClose={onClose}
      message={message}
      actions={(
        <Button
          onClick={() => onClose()}
        >
          {t('button.ok')}
        </Button>
      )}
    />
  );
};

export default AlertMessageTemplate;
