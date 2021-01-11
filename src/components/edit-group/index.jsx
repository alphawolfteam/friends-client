import React, { useState } from 'react';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditDialogTitle from './edit-dialog-title/EditDialogTitle';
import EditDialogContent from './edit-dialog-content/EditDialogContent';
import EditDialogActions from './edit-dialog-actions/EditDialogActions';

const EditGroupDialog = ({ group, open, onClose }) => {
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
    />
  );
};

export default EditGroupDialog;
