import React, { useContext, useMemo, useState } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './GroupDialog.styles';
import LockIcon from '../lock-icon/LockIcon';
import DialogTemplate from '../dialog-template/DialogTemplate';
import EditGroupDialog from '../edit-group-dialog/EditGroupDialog';
import userContext from '../../stores/userStore';
import TagsList from '../tags-list/TagsList';
import UsersList from '../users-list/UsersList';
import GroupService from '../../services/GroupsService';

const GroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const user = useContext(userContext);
  const [openEditGroupDialog, setOpenEditGroupDialog] = useState(false);

  const isAManager = useMemo(() => GroupService.isAManager(group, user.id), [group, user]);

  const isAFriend = useMemo(
    () => group.users.map((groupUser) => groupUser.id).includes(user.id),
    [group, user],
  );

  const handleEditGroup = () => {
    setOpenEditGroupDialog(true);
  };

  const handleLeaveGroup = () => {
    // TODO: Leave group
    onClose();
  };

  return (
    <>
      {!openEditGroupDialog ? (
        <DialogTemplate
          title={(
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
            </>
          )}
          content={(
            <>
              <UsersList users={group.users} />
              <TagsList tags={group.tags} />
            </>
          )}
          actions={(
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
          )}
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
