import React, { useContext, useMemo } from "react";
import useStyles from "./GroupDialog.styles";
import { Button } from "@material-ui/core";
import LockIcon from "../lock-icon/LockIcon";
import DialogTemplate from "../dialog-template/DialogTemplate";
import { userContext } from "../../stores/userStore";
import config from "../../appConf";
import TagsList from "../tags-list/TagsList";
import UsersList from "../users-list/UsersList";

const rolesEnum = config.rolesEnum;

const GroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const user = useContext(userContext);

  const isAManager = useMemo(() => {
    for (const groupUser of group.users) {
      if (user.id === groupUser.id && groupUser.role === rolesEnum.MANAGER) {
        return true;
      }
    }
    return false;
  }, [group, user]);

  const isAFriend = useMemo(
    () => group.users.map((groupUser) => groupUser.id).includes(user.id),
    [group, user]
  );

  const handleEditGroup = () => {
    onClose();
  };

  const handleLeaveGroup = () => {
    // TODO: Leave group
    console.log("user #id(", user.id, ") leaving group #id(", group._id, ")");
    onClose();
  };

  return (
    <DialogTemplate
      title={
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
      }
      content={
        <>
          <UsersList users={group.users}/>
          <TagsList tags={group.tags} />
        </>
      }
      actions={
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
      }
      open={open}
      onClose={onClose}
    />
  );
};

export default GroupDialog;
