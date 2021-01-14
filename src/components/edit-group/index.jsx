import React from 'react';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditDialogTitle from './edit-dialog-title/EditDialogTitle';
import EditInfoPage from './edit-info-page/EditInfoPage';
import EditUsersListPage from './edit-users-list-page/EditUsersListPage';
import Paging from '../shared/paging/Paging';

const EditGroupDialog = ({
  group,
  setGroup,
  open,
  onClose,
}) => {
  return (
    <DialogTemplate
      title={(
        <EditDialogTitle
          group={group}
          setGroup={setGroup}
          initialIcon={group.icon}
        />
      )}
      content={(
        <Paging pages={[
          <EditInfoPage group={group} setGroup={setGroup} />,
          <EditUsersListPage group={group} setGroup={setGroup} />,
        ]}
        />
      )}
      open={open}
      onClose={onClose}
      cancelOnTouchOutside
    />
  );
};

export default EditGroupDialog;
