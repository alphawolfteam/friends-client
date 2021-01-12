import React, {
  useContext, useState, useEffect,
} from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import useStyles from './ViewDialogActions.styles';
import CustomeBackdrop from '../../shared/custome-backdrop/CustomeBackdrop';
import userContext from '../../../stores/userStore';
import researchContext from '../../../stores/researchStore';
import GroupsService from '../../../services/GroupsService';
import AlertDialogTemplate from '../../shared/alert-dialog-template/AlertDialogTemplate';
import AlertMessageTemplate from '../../shared/alert-message-template/AlertMessageTemplate';
import { getRole } from '../../shared/sharedFunctions';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';

const getManagersCount = (groupsUsers) => groupsUsers.filter(
  (user) => user.role === getRole('manager').value,
).length;

const ViewDialogActions = ({ group, setOpenEditGroupDialog, onClose }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const research = useContext(researchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [openAlertLeaveDialog, setOpenAlertLeaveDialog] = useState(false);
  const [openAlertLeaveMessage, setOpenAlertLeaveMessage] = useState(false);
  const [openAlertDeleteDialog, setOpenAlertDeleteDialog] = useState(false);
  const [alertDeleteDialogMessage, setAlertDeleteDialogMessage] = useState('');
  const [dialogLeaveAnswer, setDialogLeaveAnswer] = useState(undefined);
  const [dialogDeleteAnswer, setDialogDeleteAnswer] = useState(undefined);
  const currentUserRole = GroupsService.getUserRoleValueFromPopulatedGroup(
    group,
    currentUser.genesisId,
  );

  useEffect(async () => {
    if (dialogLeaveAnswer === 'agree') {
      setIsLoading(true);
      GroupsService.removeUserFromGroup(group._id, currentUser.genesisId)
        .then(() => {
          onClose();
          research();
        }).catch(() => {
          setIsLoading(false);
          enqueueSnackbar(
            <CustomeSnackbarContent message={t('error.server')} />,
            { variant: 'error' },
          );
        });
    }
  }, [dialogLeaveAnswer]);

  useEffect(async () => {
    if (dialogDeleteAnswer === 'agree') {
      setIsLoading(true);
      GroupsService.deleteGroup(group._id)
        .then(() => {
          onClose();
          research();
        }).catch(() => {
          setIsLoading(false);
          enqueueSnackbar(
            <CustomeSnackbarContent message={t('error.server')} />,
            { variant: 'error' },
          );
        });
    }
  }, [dialogDeleteAnswer]);

  const handleDeleteGroup = () => {
    setAlertDeleteDialogMessage(t('alertMessage.deleteGroup'));
    setOpenAlertDeleteDialog(true);
  };

  const handleLeaveGroup = () => {
    if (group.users.length === 1) {
      setAlertDeleteDialogMessage(t('alertMessage.theGroupWillBeDeleted'));
      setOpenAlertDeleteDialog(true);
    } else if (currentUserRole === getRole('manager').value
      && getManagersCount(group.users) === 1) {
      setOpenAlertLeaveMessage(true);
    } else {
      setOpenAlertLeaveDialog(true);
    }
  };

  return (
    <>
      <div className={classes.actions}>
        {currentUserRole === getRole('manager').value && (
        <>
          <Button
            onClick={() => setOpenEditGroupDialog(true)}
          >
            {t('button.edit')}
          </Button>
          <Button onClick={() => handleDeleteGroup()}>
            {t('button.deleteGroup')}
          </Button>
          <Button
            onClick={() => handleLeaveGroup()}
          >
            {t('button.leaveGroup')}
          </Button>
        </>
        )}
        {currentUserRole === getRole('member').value && (
        <Button
          onClick={() => handleLeaveGroup()}
        >
          {t('button.leaveGroup')}
        </Button>
        )}
      </div>
      <AlertDialogTemplate
        message={t('alertMessage.leaveGroup')}
        open={openAlertLeaveDialog}
        onClose={() => setOpenAlertLeaveDialog(false)}
        handleAnswer={(answer) => setDialogLeaveAnswer(answer)}
        preferredAnswer="disagree"
      />
      <AlertDialogTemplate
        message={alertDeleteDialogMessage}
        open={openAlertDeleteDialog}
        onClose={() => setOpenAlertDeleteDialog(false)}
        handleAnswer={(answer) => setDialogDeleteAnswer(answer)}
        preferredAnswer="disagree"
      />
      <AlertMessageTemplate
        message={t('alertMessage.cantLeaveGroup')}
        open={openAlertLeaveMessage}
        onClose={() => setOpenAlertLeaveMessage(false)}
      />
      <CustomeBackdrop open={isLoading} />
    </>
  );
};

export default ViewDialogActions;
