import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';
import refreshDataContext from '../../../stores/refreshDataStore';
// import GroupsService from '../../../services/GroupsService';
import GroupsService from '../../../services/Mock/GroupsService';
import ValidationService from '../../../services/ValidationService';

const AddDialogActions = ({
  newGroup,
  setValidationArray,
  setIsLoading,
  setOpenValidationMessage,
  onClose,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const refreshData = useContext(refreshDataContext);

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
            // TODO: Update only
            refreshData();
            onClose();
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
      <Button onClick={() => handleAdd()}>
        {t('button.add')}
      </Button>
      <Button onClick={() => onClose()}>
        {t('button.cancel')}
      </Button>
    </>
  );
};

export default AddDialogActions;
