import React, { useState, useContext } from 'react';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditDialogTitle from './edit-dialog-title/EditDialogTitle';
import EditDialogContent from './edit-dialog-content/EditDialogContent';
import researchContext from '../../stores/researchStore';

const EditGroupDialog = ({ group, open, onClose }) => {
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
      open={open}
      onClose={() => {
        onClose();
        research();
      }}
      cancelOnTouchOutside
    />
  );
};

export default EditGroupDialog;
