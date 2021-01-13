import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import IconInput from '../../shared/icon-input/IconInput';
import EditableGroupName from '../editable-group-name/EditableGroupName';
import LockIconInput from '../../shared/lock-icon-input/LockIconInput';
import { setNewGroupIcon, setNewGroupType } from '../../shared/sharedFunctions';
import GroupsService from '../../../services/GroupsService';
import useStyles from './EditDialogTitle.styles';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';

const EditDialogTitle = ({ newGroup, setNewGroup, initialIcon }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [isLockLoading, setIsLockLoading] = useState(false);
  const [isIconLoading, setIsIconLoading] = useState(false);

  const handleOnIconChange = (newIcon) => {
    const prevIcon = newGroup.icon;
    if (prevIcon !== newIcon) {
      setNewGroupIcon(setNewGroup, newIcon);
      setIsIconLoading(true);
      GroupsService.updateGroupDetails(newGroup._id, { ...newGroup, icon: newIcon })
        .catch(() => {
          setNewGroupIcon(setNewGroup, prevIcon);
          enqueueSnackbar(
            <CustomeSnackbarContent message={t('error.server')} />,
            { variant: 'error' },
          );
        }).finally(() => {
          setIsIconLoading(false);
        });
    }
  };

  const handleOnTypeChange = (newType) => {
    setIsLockLoading(true);
    GroupsService.updateGroupDetails(newGroup._id, { ...newGroup, type: newType })
      .then(() => {
        setNewGroupType(setNewGroup, newType);
      })
      .catch(() => {
        enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        );
      }).finally(() => {
        setIsLockLoading(false);
      });
  };

  return (
    <>
      <IconInput
        shownIcon={newGroup.icon}
        initialIcon={initialIcon}
        onChange={handleOnIconChange}
        isLoading={isIconLoading}
      />
      <div className={classes.title}>
        <EditableGroupName
          group={newGroup}
          setGroup={setNewGroup}
        />
        <LockIconInput
          type={newGroup.type}
          onChange={handleOnTypeChange}
          isLoading={isLockLoading}
        />
      </div>
    </>
  );
};

export default EditDialogTitle;
