import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditDialogTitle from './edit-dialog-title/EditDialogTitle';
import EditDialogContent from './edit-dialog-content/EditDialogContent';
import EditDialogActions from './edit-dialog-actions/EditDialogActions';
import useStyles from './index.styles';

const EditGroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const [newGroup, setNewGroup] = useState(group);

  return (
    <DialogTemplate
      title={(
        <EditDialogTitle
          newGroup={newGroup}
          setNewGroup={setNewGroup}
          initialIcon={group.icon}
        />
      )}
      content={(
        <EditDialogContent
          newGroup={newGroup}
          setNewGroup={setNewGroup}
        />
      )}
      actions={(
        <EditDialogActions group={group} />
      )}
      open={open}
      onClose={() => onClose()}
      closeButton={(
        <IconButton onClick={onClose} className={classes.closeButton}>
          <Close />
        </IconButton>
      )}
    />
  );
};

export default EditGroupDialog;
