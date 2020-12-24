import React, {
  useContext, useMemo, useState, useEffect,
} from 'react';
import { Info, People, Close } from '@material-ui/icons';
import { Button, Typography, IconButton } from '@material-ui/core';
import useStyles from './GroupDialog.styles';
import LockIcon from '../lock-icon/LockIcon';
import DialogTemplate from '../dialog-template/DialogTemplate';
import EditGroupDialog from '../edit-group-dialog/EditGroupDialog';
import userContext from '../../stores/userStore';
import TagsList from '../tags-list/TagsList';
import UsersList from '../users-list/UsersList';
import GroupService from '../../services/GroupsService';
import UsersService from '../../services/UsersService';
import config from '../../appConf';

const { getRole } = config;

const GroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const currentUser = useContext(userContext);
  const [openEditGroupDialog, setOpenEditGroupDialog] = useState(false);
  const [populatedUsers, setPopulatedUsers] = useState([]);

  // TODO: Sort the users- managers at the top and bold

  useEffect(async () => {
    // TODO: Send 5 users at a time
    setPopulatedUsers(
      await UsersService.getPopulatedUsersList(group.users.map((user) => user.id)),
    );
  }, []);

  const role = useMemo(() => {
    return GroupService.getUserRoleCode(group, currentUser.id);
  }, [group, currentUser]);

  const isAFriend = useMemo(
    () => populatedUsers.map((groupUser) => groupUser.id).includes(currentUser.id),
    [populatedUsers, currentUser],
  );

  const handleEditGroup = () => {
    setOpenEditGroupDialog(true);
  };

  const handleLeaveGroup = () => {
    // TODO: Leave group
    onClose();
  };

  const dialogTitle = () => (
    <>
      <div className={classes.groupIcon}>
        <img className={classes.img} src={group.icon} alt="icon" />
      </div>
      <div className={classes.groupTitle}>
        {group.name}
        <LockIcon disabled type={group.type} />
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
      <UsersList users={populatedUsers} group={group} />
    </div>
  );

  const dialogActions = () => (
    <div className={classes.actions}>
      {role === getRole('manager').code && (
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
      ) : (
        <EditGroupDialog
          open={openEditGroupDialog}
          onClose={() => setOpenEditGroupDialog(false)}
          group={group}
        />
      )}
    </>
  );
};

export default GroupDialog;
