import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import AlertValidationMessage from '../alert-validation-message/AlertValidationMessage';
import CustomBackdrop from '../../shared/custom-backdrop/CustomBackdrop';
import researchContext from '../../../stores/researchStore';
import GroupsService from '../../../services/GroupsService';
import ValidationService from '../../../services/ValidationService';
import config from '../../../appConf';
import useStyles from './AddDialogActions.styles';

const AddDialogActions = ({ newGroup, onClose }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const research = useContext(researchContext);
  const [openValidationAlert, setOpenValidationAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationTitlesArray, setValidationTitlesArray] = useState([]);

  const handleAdd = () => {
    setValidationTitlesArray(() => {
      const newValue = ValidationService.validateGroupObject(
        newGroup,
        config.length_limitations.min_length_group_name,
      );

      if (newValue.length === 0) {
        setIsLoading(true);
        GroupsService.createGroup({
          ...newGroup,
          users: [...newGroup.users.map(({ user, role }) => (
            { id: user.id, role }
          ))],
        })
          .then(() => {
            onClose();
            research();
          })
          .catch(() => {
            setIsLoading(false);
            enqueueSnackbar(t('error.server'), { variant: 'error' });
          });
      } else {
        setOpenValidationAlert(true);
      }

      return newValue;
    });
  };

  return (
    <>
      <Button className={classes.button} onClick={handleAdd}>
        {t('button.add')}
        <Add className={classes.icon} />
      </Button>
      <AlertValidationMessage
        validationTitlesArray={validationTitlesArray}
        open={openValidationAlert}
        onClose={() => setOpenValidationAlert(false)}
      />
      <CustomBackdrop open={isLoading} />
    </>
  );
};

export default AddDialogActions;
