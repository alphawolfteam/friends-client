import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './EditGroupDialog.styles';
import DialogTemplate from '../dialog-template/DialogTemplate';
import UserInputFields from '../users-input-fields/UserInputFields';

const EditGroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const [newGroup, setNewGroup] = useState({ ...group });

  // useEffect(() => {
  //   console.log("newGroup.users", newGroup.users);
  // }, [newGroup]);

  const handleSave = () => {
    // TODO: Save editing
    // TODO: Add validation
    onClose();
  };

  const handleDeleteGroup = () => {
    // TODO: Delete group
    // TODO: Add ensuring message
    console.log('Delete group #id(', group._id, ')');
    onClose();
  };

  return (
    <DialogTemplate
      title={<>title</>}
      content={(
        <>
          <UserInputFields group={newGroup} setGroup={setNewGroup} />
        </>
      )}
      actions={(
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
      )}
      open={open}
      onClose={onClose}
    />
  );
};

export default EditGroupDialog;
