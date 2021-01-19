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

const EditDialogTitle = ({
  group,
  setGroup,
  initialIcon,
}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [isLockLoading, setIsLockLoading] = useState(false);
  const [isIconLoading, setIsIconLoading] = useState(false);

  const handleOnIconChange = (newIcon) => {
    const prevIcon = group.icon;
    if (prevIcon !== newIcon) {
      setNewGroupIcon(setGroup, newIcon);
      setIsIconLoading(true);
      GroupsService.updateGroupDetails(group._id, { ...group, icon: newIcon })
        .catch(() => {
          setNewGroupIcon(setGroup, prevIcon);
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
    GroupsService.updateGroupDetails(group._id, { ...group, type: newType })
      .then(() => {
        setNewGroupType(setGroup, newType);
      }).catch(() => {
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
        shownIcon={group.icon}
        initialIcon={initialIcon}
        onChange={handleOnIconChange}
        isLoading={isIconLoading}
      />
      <div className={classes.title}>
        <EditableGroupName
          group={group}
          setGroup={setGroup}
        />
        <LockIconInput
          type={group.type}
          onChange={handleOnTypeChange}
          isLoading={isLockLoading}
        />
      </div>
    </>
  );
};

export default EditDialogTitle;
