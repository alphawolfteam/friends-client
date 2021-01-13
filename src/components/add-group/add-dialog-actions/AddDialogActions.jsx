import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import AlertValidationMessage from '../alert-validation-message/AlertValidationMessage';
import CustomeBackdrop from '../../shared/custome-backdrop/CustomeBackdrop';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';
import researchContext from '../../../stores/researchStore';
import GroupsService from '../../../services/GroupsService';
import ValidationService from '../../../services/ValidationService';
import useStyles from './AddDialogActions.styles';

const AddDialogActions = ({ newGroup, onClose }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const research = useContext(researchContext);
  const [openValidationMessage, setOpenValidationMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationArray, setValidationArray] = useState([]);

  const handleAdd = async () => {
    setValidationArray(() => {
      const newValue = ValidationService.validateGroupObject(newGroup);

      if (newValue.length === 0) {
        setIsLoading(true);
        GroupsService.createGroup({
          ...newGroup,
          users: [...newGroup.users.map((userObject) => {
            return { id: userObject.user.id, role: userObject.role };
          })],
        })
          .then(() => {
            onClose();
            research();
          })
          .catch(() => {
            setIsLoading(false);
            enqueueSnackbar(
              <CustomeSnackbarContent message={t('error.server')} />,
              { variant: 'error' },
            );
          });
      } else {
        setOpenValidationMessage(true);
      }

      return newValue;
    });
  };

  return (
    <>
      <Button className={classes.button} onClick={() => handleAdd()}>
        {t('button.add')}
        <Add className={classes.icon} />
      </Button>
      <AlertValidationMessage
        validationArray={validationArray}
        open={openValidationMessage}
        onClose={() => setOpenValidationMessage(false)}
      />
      <CustomeBackdrop open={isLoading} />
    </>
  );
};

export default AddDialogActions;
