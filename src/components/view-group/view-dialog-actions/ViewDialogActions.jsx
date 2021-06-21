import React, {
  useContext, useState, useEffect,
} from 'react';
import { Tooltip, Fab } from '@material-ui/core';
import { ExitToAppOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import useStyles from './ViewDialogActions.styles';
import CustomBackdrop from '../../shared/custom-backdrop/CustomBackdrop';
import userContext from '../../../stores/userStore';
import researchContext from '../../../stores/researchStore';
import GroupsService from '../../../services/GroupsService';
import AlertDialogTemplate from '../../shared/alert-dialog-template/AlertDialogTemplate';
import config from '../../../appConf';

const ViewDialogActions = ({ group, onClose }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const research = useContext(researchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [openAlertLeaveDialog, setOpenAlertLeaveDialog] = useState(false);
  const [openAlertDeleteDialog, setOpenAlertDeleteDialog] = useState(false);
  const [alertDeleteDialogMessage, setAlertDeleteDialogMessage] = useState('');
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
          enqueueSnackbar(t('error.server'), { variant: 'error' });
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
          enqueueSnackbar(t('error.server'), { variant: 'error' });
        });
    }
  }, [dialogDeleteAnswer]);

  const handleLeaveGroup = () => {
    if (group.users.length === 1) {
      setAlertDeleteDialogMessage(t('alertMessage.theGroupWillBeDeleted'));
      setOpenAlertDeleteDialog(true);
    } else {
      setOpenAlertLeaveDialog(true);
    }
  };

  const renderButtons = () => (
    <>
      {currentUserRole === config.roles.member_role_value && (
      <div className={classes.actions}>
        <Tooltip title={t('tooltip.leaveGroup')}>
          <Fab
            onClick={() => handleLeaveGroup()}
            className={classes.fab}
          >
            <ExitToAppOutlined className={classes.icon} />
          </Fab>
        </Tooltip>
      </div>
      )}
    </>
  );

  return (
    <div className={classes.root}>
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
      <CustomBackdrop open={isLoading} />
    </div>
  );
};

export default ViewDialogActions;
