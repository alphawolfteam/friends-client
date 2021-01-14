import React, { useState, useContext, useMemo } from 'react';
import DialogTemplate from '../shared/dialog-template/DialogTemplate';
import EditGroupDialog from '../edit-group/index';
import ViewDialogTitle from './view-dialog-title/ViewDialogTitle';
import ViewDialogContent from './view-dialog-content/ViewDialogContent';
import ViewDialogActions from './view-dialog-actions/ViewDialogActions';
import researchContext from '../../stores/researchStore';

const GroupDialog = ({
  group,
  setGroup,
  open,
  onClose,
}) => {
  const [openEditGroupDialog, setOpenEditGroupDialog] = useState(false);
  const research = useContext(researchContext);
  const initialType = useMemo(() => group.type, []);

  const handleOnClose = () => {
    if (initialType !== group.type) {
      research();
    } else {
      onClose();
    }
  };

  return (
    <>
      {openEditGroupDialog ? (
        <EditGroupDialog
          open={openEditGroupDialog}
          onClose={() => setOpenEditGroupDialog(false)}
          group={group}
          setGroup={setGroup}
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
              onClose={handleOnClose}
            />
          )}
          open={open}
          onClose={handleOnClose}
          cancelOnTouchOutside
        />
      )}
    </>
  );
};

export default GroupDialog;
