import React from "react";
import useStyles from "./GroupDialog.styles";
import LockIcon from "../lock-icon/LockIcon";
import DialogTemplate from "../dialog-template/DialogTemplate.jsx";

const GroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();

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
      content="content"
      actions="actions"
      open={open}
      onClose={onClose}
    />
  );
};

export default GroupDialog;
