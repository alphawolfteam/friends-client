import { TextareaAutosize } from '@material-ui/core';
import React from 'react';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import ValidationService from '../../services/ValidationService';
import GroupsService from '../../services/Mock/GroupsService';
// import GroupsService from '../../services/GroupsService';
import { setNewGroupDescription } from '../../utils/sharedFunctions';
import useStyles from './EditableGroupDescription.styles';
import CustomeSnackbarContent from '../custome-snackbar-content/CustomeSnackbarContent';

const GroupDescriptionInput = ({ group, setGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSave = (event) => {
    const description = event.target.value;
    const validationResult = ValidationService.validateGroupDescription(description);
    if (validationResult === null) {
      // TODO: Add loader
      GroupsService.updateGroupDetails(group._id, { ...group, description })
        .then(() => {
          setNewGroupDescription(setGroup, description);
        })
        .catch(() => {
          enqueueSnackbar(<CustomeSnackbarContent message={t('error.server')} />, { variant: 'error' });
        });
    } else {
      enqueueSnackbar(<CustomeSnackbarContent message={t(`validation.${validationResult}`)} />);
    }
  };

  return (
    <TextareaAutosize
      cols="5"
      rows={2}
      rowsMax={2}
      placeholder={t('placeholder.description')}
      value={group.description}
      onChange={(e) => handleOnSave(e)}
      className={classes.root}
    />
  );
};

export default GroupDescriptionInput;
