import React, { useState } from 'react';
import { Close } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditGroupDialog from '../edit-group/index';
import ViewDialogTitle from './view-dialog-title/ViewDialogTitle';
import ViewDialogContent from './view-dialog-content/ViewDialogContent';
import ViewDialogActions from './view-dialog-actions/ViewDialogActions';
import useStyles from './index.styles';

const GroupDialog = ({ group, open, onClose }) => {
  const classes = useStyles();
  const [openEditGroupDialog, setOpenEditGroupDialog] = useState(false);

  return (
    <>
      {openEditGroupDialog ? (
        <EditGroupDialog
          open={openEditGroupDialog}
          onClose={() => onClose()}
          onReturn={() => setOpenEditGroupDialog(false)}
          group={group}
        />
      ) : (
        <DialogTemplate
          title={(
            <ViewDialogTitle group={group} />
          )}
          content={(
            <ViewDialogContent group={group} />
          )}
          actions={(
            <ViewDialogActions
              group={group}
              setOpenEditGroupDialog={setOpenEditGroupDialog}
              onClose={onClose}
            />
          )}
          open={open}
          onClose={onClose}
          closeButton={(
            <IconButton onClick={onClose} className={classes.closeButton}>
              <Close />
            </IconButton>
          )}
        />
      )}
    </>
  );
};

export default GroupDialog;
