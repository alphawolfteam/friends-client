import React, { useState, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditDialogTitle from './edit-dialog-title/EditDialogTitle';
import EditDialogContent from './edit-dialog-content/EditDialogContent';
import EditDialogActions from './edit-dialog-actions/EditDialogActions';
import useStyles from './index.styles';
import researchContext from '../../stores/researchStore';

const EditGroupDialog = ({
  group,
  open,
  onClose,
  onReturn,
}) => {
  const classes = useStyles();
  const research = useContext(researchContext);
  const [newGroup, setNewGroup] = useState(group);

  return (
    <DialogTemplate
      title={(
        <EditDialogTitle
          newGroup={newGroup}
          setNewGroup={(value) => setNewGroup(value)}
          initialIcon={group.icon}
        />
      )}
      content={(
        <EditDialogContent
          newGroup={newGroup}
          setNewGroup={(value) => setNewGroup(value)}
        />
      )}
      actions={(
        <EditDialogActions
          group={group}
          onClose={() => onClose()}
        />
      )}
      open={open}
      onClose={() => {
        research();
        onReturn();
      }}
      closeButton={(
        <IconButton
          onClick={() => {
            research();
            onReturn();
          }}
          className={classes.closeButton}
        >
          <Close />
        </IconButton>
      )}
    />
  );
};

export default EditGroupDialog;
