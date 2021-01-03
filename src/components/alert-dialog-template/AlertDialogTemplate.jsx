import React from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import AlertTemplate from '../alert-template/AlertTemplate';
import useStyles from './AlertDialogTemplate.styles';

const AlertDialogTemplate = ({
  open, onClose, handleAnswer, message, preferredAnswer,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const answerButton = (answer) => (
    <Button
      onClick={() => {
        handleAnswer(answer);
        onClose();
      }}
      className={
        preferredAnswer === answer
          ? classes.mainButton
          : classes.secondaryButton
      }
    >
      {t(`button.${answer}`)}
    </Button>
  );

  return (
    <AlertTemplate
      open={open}
      onClose={onClose}
      message={message}
      actions={(
        <div className={classes.actions}>
          {answerButton('agree')}
          {answerButton('disagree')}
        </div>
      )}
    />
  );
};

export default AlertDialogTemplate;
