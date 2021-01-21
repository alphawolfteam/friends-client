import React, { useContext, useState, useEffect } from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import { DeleteOutlined, ExitToAppOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import researchContext from '../../../stores/researchStore';
import userContext from '../../../stores/userStore';
import GroupsService from '../../../services/GroupsService';
import AlertDialogTemplate from '../../shared/alert-dialog-template/AlertDialogTemplate';
import AlertMessageTemplate from '../../shared/alert-message-template/AlertMessageTemplate';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';
import CustomeBackdrop from '../../shared/custome-backdrop/CustomeBackdrop';
import useStyles from './EditDialogActions.styles';
import config from '../../../appConf';

const getManagersCount = (groupsUsers) => groupsUsers.filter(
  ({ role }) => role === config.roles.manager_role_value,
).length;

const EditDialogActions = ({ group, onClose }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const research = useContext(researchContext);
  const currentUser = useContext(userContext);
  const [openAlertLeaveDialog, setOpenAlertLeaveDialog] = useState(false);
  const [openAlertLeaveMessage, setOpenAlertLeaveMessage] = useState(false);
  const [openAlertDeleteDialog, setOpenAlertDeleteDialog] = useState(false);
  const [alertDeleteDialogMessage, setAlertDeleteDialogMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dialogLeaveAnswer, setDialogLeaveAnswer] = useState(undefined);
  const [dialogDeleteAnswer, setDialogDeleteAnswer] = useState(undefined);
  const currentUserRole = GroupsService.getUserRoleFromPopulatedGroup(
    group,
    currentUser.genesisId,
  );

  useEffect(() => {
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

  useEffect(() => {
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
    } else if (currentUserRole === config.roles.manager_role_value
      && getManagersCount(group.users) === 1) {
      setOpenAlertLeaveMessage(true);
    } else {
      setOpenAlertLeaveDialog(true);
    }
  };

  const renderButtons = () => (
    <div className={classes.actions}>
      <Tooltip title={t('tooltip.leaveGroup')}>
        <Fab
          onClick={() => handleLeaveGroup()}
          className={classes.fab}
        >
          <ExitToAppOutlined className={classes.icon} />
        </Fab>
      </Tooltip>
      <Tooltip title={t('tooltip.deleteGroup')}>
        <Fab
          onClick={() => handleDeleteGroup()}
          className={classes.fab}
        >
          <DeleteOutlined className={classes.icon} />
        </Fab>
      </Tooltip>
    </div>
  );

  return (
    <>
      {renderButtons()}
      <AlertDialogTemplate
        message={t('alertMessage.leaveGroup')}
        open={openAlertLeaveDialog}
        onClose={() => setOpenAlertLeaveDialog(false)}
        handleAnswer={setDialogLeaveAnswer}
        preferredAnswer="disagree"
      />
      <AlertDialogTemplate
        message={alertDeleteDialogMessage}
        open={openAlertDeleteDialog}
        onClose={() => setOpenAlertDeleteDialog(false)}
        handleAnswer={setDialogDeleteAnswer}
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

export default EditDialogActions;
