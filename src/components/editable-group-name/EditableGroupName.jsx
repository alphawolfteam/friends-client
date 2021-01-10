import React from 'react';
import { Input } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import ValidationService from '../../services/ValidationService';
// import GroupsService from '../../services/GroupsService';
import GroupsService from '../../services/Mock/GroupsService';
import { setNewGroupName } from '../../utils/sharedFunctions';
import useStyles from './EditableGroupName.styles';

const GroupNameInput = ({ group, setGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSave = (event) => {
    const name = event.target.value;
    const validationResult = ValidationService.validateGroupName(name);
    if (validationResult === null) {
      // TODO: Add loader
      GroupsService.updateGroupDetails(group._id, { ...group, name })
        .then(() => {
          setNewGroupName(setGroup, name);
        })
        .catch(() => {
          enqueueSnackbar(t('error.server'), { variant: 'error' });
        });
    } else {
      enqueueSnackbar(t(`validation.${validationResult}`));
    }
  };

  return (
    <Input
      disableUnderline
      placeholder={t('placeholder.name')}
      value={group.name}
      onChange={(e) => handleOnSave(e)}
      className={classes.root}
    />
  );
};

export default GroupNameInput;
