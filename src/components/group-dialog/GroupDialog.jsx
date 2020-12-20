import React, {
  useContext, useMemo, useState, useEffect,
} from 'react';
import { Button } from '@material-ui/core';
import useStyles from './GroupDialog.styles';
import LockIcon from '../lock-icon/LockIcon';
import DialogTemplate from '../dialog-template/DialogTemplate';
import EditGroupDialog from '../edit-group-dialog/EditGroupDialog';
import userContext from '../../stores/userStore';
import TagsList from '../tags-list/TagsList';
import UsersList from '../users-list/UsersList';
import GroupService from '../../services/GroupsService';
import UsersService from '../../services/UsersService';

const GroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const currentUser = useContext(userContext);
  const [openEditGroupDialog, setOpenEditGroupDialog] = useState(false);
  const [populatedUsers, setPopulatedUsers] = useState([]);

  // TODO: Sort the users- managrs at the top and bold

  useEffect(async () => {
    // TODO: Send 5 users at a time
    setPopulatedUsers(
      await UsersService.getPopulatedUsersList(group.users.map((user) => user.id)),
    );
  }, []);

  const isAManager = useMemo(() => {
    return GroupService.isAManager(group, currentUser.id);
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
      {group.icon && (
        <div className={classes.groupIcon}>
          <img className={classes.img} src={group.icon} alt="icon" />
        </div>
      )}
      <div className={classes.groupTitle}>
        {group.name}
        <LockIcon type={group.type} />
      </div>
      <div className={classes.groupDescription}>
        {group.description}
      </div>
    </>
  );

  const dialogContent = () => (
    <>
      <UsersList users={populatedUsers} />
      <TagsList tags={group.tags} />
    </>
  );

  const dialogActions = () => (
    <>
      {isAManager && (
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
    </>
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
