import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import refreshDataContext from '../../stores/refreshDataStore';
import DialogTemplate from '../../components/dialog-template/DialogTemplate';
import AlertValidationMessage from '../../components/alert-validation-message/AlertValidationMessage';
import IconInput from '../../components/icon-input/IconInput';
import GroupNameInput from '../../components/group-name-input/GroupNameInput';
import LockIconInput from '../../components/lock-icon-input/LockIconInput';
import UsersInputFields from '../../components/users-input-fields/UsersInputFields';
import Paging from '../../components/paging/Paging';
import GroupDescriptionInput from '../../components/group-description-input/GroupDescriptionInput';
import TagsInputFields from '../../components/tags-input-fields/TagsInputFields';
import AlertDialogTemplate from '../../components/alert-dialog-template/AlertDialogTemplate';
// import GroupsService from '../../services/GroupsService';
import GroupsService from '../../services/Mock/GroupsService';
import ValidationService from '../../services/ValidationService';
import useStyles from './EditGroupDialog.styles';

const getNestedGroupCopy = (group) => {
  return {
    ...group,
    users: [...group.users.map((user) => {
      return { ...user };
    })],
  };
};

const EditGroupDialog = ({
  group, open, onClose, onCancel,
}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const refreshData = useContext(refreshDataContext);
  const [openAlertSaveDialog, setOpenAlertSaveDialog] = useState(false);
  const [dialogSaveAnswer, setDialogSaveAnswer] = useState(undefined);
  const [openAlertDeleteDialog, setOpenAlertDeleteDialog] = useState(false);
  const [dialogDeleteAnswer, setDialogDeleteAnswer] = useState(undefined);
  const [openValidationMessage, setOpenValidationMessage] = useState(false);
  const [validationArray, setValidationArray] = useState([]);
  const [newGroup, setNewGroup] = useState(getNestedGroupCopy(group));

  useEffect(async () => {
    if (dialogSaveAnswer === 'agree') {
      // TODO: Add loader
      GroupsService.updateGroup(group, newGroup)
        .then(() => {
          // TODO: Update only
          refreshData();
          onClose();
        })
        .catch(() => enqueueSnackbar(t('error.server'), { variant: 'error' }));
    }
  }, [dialogSaveAnswer]);

  useEffect(async () => {
    if (dialogDeleteAnswer === 'agree') {
      // TODO: Add loader
      GroupsService.deleteGroup(group._id)
        .then(() => {
          // TODO: Update only
          refreshData();
          onClose();
        })
        .catch(() => enqueueSnackbar(t('error.server'), { variant: 'error' }));
    }
  }, [dialogDeleteAnswer]);

  const handleSave = () => {
    setValidationArray(() => {
      const newValue = ValidationService.validateGroupObject(newGroup);

      if (newValue.length === 0) {
        setOpenAlertSaveDialog(true);
      } else {
        setOpenValidationMessage(true);
      }

      return newValue;
    });
  };

  const handleDeleteGroup = () => {
    setOpenAlertDeleteDialog(true);
  };

  const renderDialogTitle = () => (
    <>
      <IconInput group={newGroup} setGroup={setNewGroup} />
      <div className={classes.title}>
        <GroupNameInput group={newGroup} setGroup={setNewGroup} />
        <LockIconInput newGroup={newGroup} setNewGroup={setNewGroup} />
      </div>
    </>
  );

  const firstPage = (
    <UsersInputFields group={newGroup} setGroup={setNewGroup} />
  );

  const secondPage = (
    <div className={classes.page}>
      <GroupDescriptionInput group={newGroup} setGroup={setNewGroup} />
      <TagsInputFields group={newGroup} setGroup={setNewGroup} />
    </div>
  );

  const renderDialogContent = () => (
    <Paging pages={[firstPage, secondPage]} />
  );

  const renderDialogActions = () => (
    <>
      <Button onClick={() => handleSave()}>
        {t('button.save')}
      </Button>
      <Button onClick={() => onCancel()}>
        {t('button.cancel')}
      </Button>
      <Button onClick={() => handleDeleteGroup()}>
        {t('button.deleteGroup')}
      </Button>
    </>
  );

  return (
    <>
      <DialogTemplate
        title={renderDialogTitle()}
        content={renderDialogContent()}
        actions={renderDialogActions()}
        open={open}
      />
      <AlertDialogTemplate
        message={t('alertMessage.saveChanges')}
        open={openAlertSaveDialog}
        onClose={() => setOpenAlertSaveDialog(false)}
        handleAnswer={(answer) => setDialogSaveAnswer(answer)}
        preferredAnswer="agree"
      />
      <AlertDialogTemplate
        message={t('alertMessage.deleteGroup')}
        open={openAlertDeleteDialog}
        onClose={() => setOpenAlertDeleteDialog(false)}
        handleAnswer={(answer) => setDialogDeleteAnswer(answer)}
        preferredAnswer="disagree"
      />
      <AlertValidationMessage
        validationArray={validationArray}
        open={openValidationMessage}
        onClose={() => setOpenValidationMessage(false)}
      />
    </>
  );
};

export default EditGroupDialog;
