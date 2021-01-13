import React, { useState, useContext } from 'react';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import AddDialogContent from './add-dialog-content/AddDialogContent';
import AddDialogActions from './add-dialog-actions/AddDialogActions';
import AddDialogTitle from './add-dialog-title/AddDialogTitle';
import userContext from '../../stores/userStore';
import groupIconsCodes from '../../utils/images/group-icons/group-icons-base64-codes';
import {
  getRole,
} from '../shared/sharedFunctions';

const DEFAULT_TYPE = 'private';
const DEFAULT_ICON = groupIconsCodes[0];

const AddGroupDialog = ({ open, onClose }) => {
  const currentUser = useContext(userContext);
  const [newGroup, setNewGroup] = useState({
    name: '',
    description: '',
    tags: [],
    type: DEFAULT_TYPE,
    users: [
      {
        user: {
          id: currentUser.genesisId,
          fullName: `${currentUser.name.firstName} ${currentUser.name.lastName}`,
        },
        role: getRole('manager').value,
      }],
    icon: DEFAULT_ICON,
  });

  return (
    <DialogTemplate
      title={(
        <AddDialogTitle
          newGroup={newGroup}
          setNewGroup={setNewGroup}
          DEFAULT_ICON={DEFAULT_ICON}
        />
      )}
      content={(
        <AddDialogContent
          newGroup={newGroup}
          setNewGroup={setNewGroup}
        />
      )}
      actions={(
        <AddDialogActions
          newGroup={newGroup}
          onClose={onClose}
        />
      )}
      onClose={onClose}
      open={open}
    />
  );
};

export default AddGroupDialog;
