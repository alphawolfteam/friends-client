import React, { useState, useContext } from 'react';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditDialogTitle from './edit-dialog-title/EditDialogTitle';
import EditInfoPage from './edit-info-page/EditInfoPage';
import EditUsersListPage from './edit-users-list-page/EditUsersListPage';
import Paging from '../shared/paging/Paging';
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
        <Paging pages={[
          <EditInfoPage newGroup={newGroup} setNewGroup={setNewGroup} />,
          <EditUsersListPage newGroup={newGroup} setNewGroup={setNewGroup} />,
        ]}
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
