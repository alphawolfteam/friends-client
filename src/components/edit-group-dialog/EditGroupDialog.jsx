import React from "react";
import useStyles from "./EditGroupDialog.styles";
import { Button } from "@material-ui/core";
import DialogTemplate from "../dialog-template/DialogTemplate";

const EditGroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();

  const handleSave = () => {
    // TODO: Save editing
    // TODO: Add validation
    onClose();
  };

  const handleDeleteGroup = () => {
    // TODO: Delete group
    // TODO: Addensuring message
    console.log("Delete group #id(", group._id, ")");
    onClose();
  };

  return (
    <DialogTemplate
      title={
        <>
          <h1>title</h1>
        </>
      }
      content={
        <>
          <h1>content</h1>
        </>
      }
      actions={
        <>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleSave()}
          >
            שמור
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => onClose()}
          >
            ביטול
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => handleDeleteGroup()}
          >
            מחיקת קבוצה
          </Button>
        </>
      }
      open={open}
      onClose={onClose}
    />
  );
};

export default EditGroupDialog;
