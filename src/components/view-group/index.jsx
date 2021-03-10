import React from 'react';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import ViewDialogTitle from './view-dialog-title/ViewDialogTitle';
import ViewDialogContent from './view-dialog-content/ViewDialogContent';
import ViewDialogActions from './view-dialog-actions/ViewDialogActions';

const GroupDialog = ({ group, open, onClose }) => {
  return (
    <DialogTemplate
      title={<ViewDialogTitle group={group} />}
      content={<ViewDialogContent group={group} />}
      actions={<ViewDialogActions group={group} onClose={onClose} />}
      open={open}
      onClose={onClose}
      cancelOnTouchOutside
    />
  );
};

export default GroupDialog;
