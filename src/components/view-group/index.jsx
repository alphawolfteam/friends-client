import React, { useState } from 'react';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditGroupDialog from '../edit-group/index';
import ViewDialogTitle from './view-dialog-title/ViewDialogTitle';
import ViewDialogContent from './view-dialog-content/ViewDialogContent';
import ViewDialogActions from './view-dialog-actions/ViewDialogActions';

const GroupDialog = ({ group, open, onClose }) => {
  const [openEditGroupDialog, setOpenEditGroupDialog] = useState(false);

  return (
    <>
      {openEditGroupDialog ? (
        <EditGroupDialog
          open={openEditGroupDialog}
          onClose={() => onClose()}
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
          cancelOnTouchOutside
        />
      )}
    </>
  );
};

export default GroupDialog;
