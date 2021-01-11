import React, {
  useContext, useState, useEffect,
} from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import useStyles from './ViewDialogActions.styles';
import CustomeBackdrop from '../../shared/custome-backdrop/CustomeBackdrop';
import userContext from '../../../stores/userStore';
import refreshDataContext from '../../../stores/refreshDataStore';
// import GroupsService from '../../../services/GroupsService';
import GroupsService from '../../../services/Mock/GroupsService';
import AlertDialogTemplate from '../../shared/alert-dialog-template/AlertDialogTemplate';
import AlertMessageTemplate from '../../shared/alert-message-template/AlertMessageTemplate';
import { getRole } from '../../shared/sharedFunctions';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';

const getManagersCount = (groupsUsers) => groupsUsers.filter(
  (user) => user.role === getRole('manager').value,
).length;

const ViewDialogActions = ({ group, setOpenEditGroupDialog }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const refreshData = useContext(refreshDataContext);
  const [isLoading, setIsLoading] = useState(false);
  const [openAlertLeaveDialog, setOpenAlertLeaveDialog] = useState(false);
  const [openAlertLeaveMessage, setOpenAlertLeaveMessage] = useState(false);
  const [openAlertDeleteDialog, setOpenAlertDeleteDialog] = useState(false);
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
          // TODO: Update only
          refreshData();
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
          // TODO: Update only
          refreshData();
        }).catch(() => {
          setIsLoading(false);
          enqueueSnackbar(
            <CustomeSnackbarContent message={t('error.server')} />,
            { variant: 'error' },
          );
        });
    }
  }, [dialogDeleteAnswer]);

  const handleLeaveGroup = () => {
    if (group.users.length === 1) {
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
          <Button
            onClick={() => setOpenEditGroupDialog(true)}
          >
            {t('button.edit')}
          </Button>
        )}
        {currentUserRole !== undefined && (
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
        message={t('alertMessage.theGroupWillBeDeleted')}
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
