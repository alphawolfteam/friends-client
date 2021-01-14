import React, {
  useContext, useState, useEffect,
} from 'react';
import { Button } from '@material-ui/core';
import { SpeedDial, SpeedDialAction } from '@material-ui/lab';
import {
  DeleteOutlined,
  EditOutlined,
  ExitToAppOutlined,
  Dehaze,
} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import useStyles from './ViewDialogActions.styles';
import CustomeBackdrop from '../../shared/custome-backdrop/CustomeBackdrop';
import userContext from '../../../stores/userStore';
import researchContext from '../../../stores/researchStore';
import GroupsService from '../../../services/GroupsService';
import AlertDialogTemplate from '../../shared/alert-dialog-template/AlertDialogTemplate';
import AlertMessageTemplate from '../../shared/alert-message-template/AlertMessageTemplate';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';
import config from '../../../appConf';

const getManagersCount = (groupsUsers) => groupsUsers.filter(
  ({ user }) => user.role === config.roles.manager_role_value,
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
  const [openSpeedDial, setOpenSpeedDial] = useState(false);
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

  const actions = [
    {
      icon: <EditOutlined />,
      name: t('button.edit'),
      onClick: () => setOpenEditGroupDialog(true),
    },
    {
      icon: <ExitToAppOutlined />,
      name: t('button.leaveGroup'),
      onClick: () => handleLeaveGroup(),
    },
    {
      icon: <DeleteOutlined />,
      name: t('button.deleteGroup'),
      onClick: () => handleDeleteGroup(),
    },
  ];

  return (
    <div className={classes.root}>
      {currentUserRole === config.roles.manager_role_value && (
        <SpeedDial
          ariaLabel="speed dial"
          className={classes.speedDialActions}
          icon={<Dehaze className={classes.speedDialIcon} />}
          onClose={() => setOpenSpeedDial(false)}
          onOpen={() => setOpenSpeedDial(true)}
          open={openSpeedDial}
          direction="left"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipPlacement="top"
              onClick={action.onClick}
            />
          ))}
        </SpeedDial>
      )}
      {currentUserRole === config.roles.member_role_value && (
        <div className={classes.actions}>
          <Button
            onClick={() => handleLeaveGroup()}
          >
            {t('button.leaveGroup')}
            <ExitToAppOutlined className={classes.icon} />
          </Button>
        </div>
      )}
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
    </div>
  );
};

export default ViewDialogActions;
