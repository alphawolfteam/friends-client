import React, {
  useContext, useMemo, useState, useEffect,
} from 'react';
import { Info, People, Close } from '@material-ui/icons';
import {
  Button,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import useStyles from './GroupDialog.styles';
import LockIcon from '../../components/lock-icon/LockIcon';
import DialogTemplate from '../../components/dialog-template/DialogTemplate';
import EditGroupDialog from '../edit-group-dialog/EditGroupDialog';
import userContext from '../../stores/userStore';
import refreshDataContext from '../../stores/refreshDataStore';
import TagsList from '../../components/tags-list/TagsList';
import UsersList from '../../components/users-list/UsersList';
import GroupService from '../../services/GroupsService';
import AlertDialogTemplate from '../../components/alert-dialog-template/AlertDialogTemplate';
import config from '../../appConf';

const { getRole } = config;

const GroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const currentUser = useContext(userContext);
  const refreshData = useContext(refreshDataContext);
  const [openEditGroupDialog, setOpenEditGroupDialog] = useState(false);
  const [openAlertLeaveDialog, setOpenAlertLeaveDialog] = useState(false);
  const [dialogLeaveAnswer, setDialogLeaveAnswer] = useState(undefined);
  const [groupUsers, setGroupUsers] = useState([]);

  useEffect(async () => {
    setGroupUsers(await GroupService.getGroupUsers(group._id));
  }, []);

  const currentUserRole = useMemo(() => {
    return GroupService.getUserRoleCode(group, currentUser.id);
  }, [group, currentUser]);

  const isAFriend = useMemo(
    () => groupUsers.map((groupUser) => groupUser.id).includes(currentUser.id),
    [groupUsers, currentUser],
  );

  const handleEditGroup = () => {
    setOpenEditGroupDialog(true);
  };

  useEffect(async () => {
    // TODO: Add loader
    if (dialogLeaveAnswer === 'agree') {
      await GroupService.removeUserFromGroup(group._id, currentUser.id);
      refreshData();
      onClose();
    }
  }, [dialogLeaveAnswer]);

  const handleLeaveGroup = () => {
    setOpenAlertLeaveDialog(true);
  };

  const dialogTitle = () => (
    <>
      <div className={classes.groupIcon}>
        <img className={classes.img} src={group.icon} alt="icon" />
      </div>
      <div className={classes.groupTitle}>
        <Tooltip title={group.name}>
          <Typography className={classes.groupName}>{group.name}</Typography>
        </Tooltip>
        <LockIcon type={group.type} />
      </div>
    </>
  );

  const dialogContent = () => (
    <div className={classes.content}>
      <Typography dir="rtl" className={classes.title}>
        <Info className={classes.titleIcon} />
        תיאור
      </Typography>
      <Typography dir="rtl" className={classes.groupDescription}>
        {group.description}
      </Typography>
      <hr className={classes.divider} />
      {group.tags.length > 0 && (
        <>
          <TagsList tags={group.tags} />
          <hr className={classes.divider} />
        </>
      )}
      <Typography dir="rtl" className={classes.title}>
        <People className={classes.titleIcon} />
        חברים
      </Typography>
      <UsersList users={groupUsers} group={group} />
    </div>
  );

  const dialogActions = () => (
    <div className={classes.actions}>
      {currentUserRole === getRole('manager').code && (
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleEditGroup()}
        >
          ערוך
        </Button>
      )}
      {isAFriend && (
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => handleLeaveGroup()}
        >
          יציאה מהקבוצה
        </Button>
      )}
    </div>
  );

  return (
    <>
      {!openEditGroupDialog ? (
        <>
          <DialogTemplate
            title={dialogTitle()}
            content={dialogContent()}
            actions={dialogActions()}
            open={open}
            onClose={onClose}
            closeButton={(
              <IconButton onClick={onClose} className={classes.closeButton}>
                <Close />
              </IconButton>
            )}
          />
          <AlertDialogTemplate
            message="אוי חבל.. לצאת מהקבוצה?"
            open={openAlertLeaveDialog}
            onClose={() => setOpenAlertLeaveDialog(false)}
            handleAnswer={(answer) => setDialogLeaveAnswer(answer)}
            prefferedAnswer="disagree"
          />
        </>
      ) : (
        <EditGroupDialog
          open={openEditGroupDialog}
          onCancel={() => setOpenEditGroupDialog(false)}
          onClose={() => onClose()}
          group={{ ...group, users: groupUsers }}
        />
      )}
    </>
  );
};

export default GroupDialog;
