import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import OptionsInputFields from '../../shared/options-input-fields/OptionsInputFields';
import Paging from '../../shared/paging/Paging';
import GroupDescriptionInput from '../group-description-input/GroupDescriptionInput';
import TagsInputFields from '../../shared/tags-input-fields/TagsInputFields';
import {
  setNewGroupUser,
  removeGroupUser,
  setNewGroupUserRole,
  setNewGroupTag,
  removeGroupTag,
} from '../../shared/sharedFunctions';
import useStyles from './AddDialogContent.styles';
import AlertDialogTemplate from '../../shared/alert-dialog-template/AlertDialogTemplate';

const AddDialogContent = ({ newGroup, setNewGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [selectedUsersLength, setSelectedUsersLength] = useState(0);
  const resolveDialog = useRef(null);

  const showCopyGroupWarning = (length) => {
    setOpenConfirmationDialog(true);
    setSelectedUsersLength(length);

    return new Promise((resolve) => {
      resolveDialog.current = resolve;
    });
  };

  const handleConfirmationDialogClose = () => {
    setOpenConfirmationDialog(false);
    resolveDialog.current(false);
  };

  const handleConfirmationDialogAnswer = (answer) => resolveDialog.current(answer === 'agree');

  return (
    <>
      <Paging
        pages={[
          {
            headline: t('headline.additionalData'),
            component: (
              <div className={classes.page}>
                <GroupDescriptionInput
                  group={newGroup}
                  setGroup={setNewGroup}
                />
                <TagsInputFields
                  tagsList={newGroup.tags}
                  onAdd={(newTag) => setNewGroupTag(setNewGroup, newTag)}
                  onRemove={(tagToRemove) => removeGroupTag(setNewGroup, tagToRemove)}
                />
              </div>
            ),
          },
          {
            headline: t('headline.friends'),
            component: (
              <OptionsInputFields
                groupUsers={newGroup.users}
                groupId={newGroup._id}
                onAdd={(userToAdd, role) => setNewGroupUser(setNewGroup, userToAdd, role)}
                onRemove={(user) => removeGroupUser(setNewGroup, user.id)}
                onChangeRole={(user, newRole) => setNewGroupUserRole(setNewGroup, user.id, newRole)}
                showCopyGroupWarning={showCopyGroupWarning}
              />
            ),
          },
        ]}
      />
      <AlertDialogTemplate
        open={openConfirmationDialog}
        onClose={handleConfirmationDialogClose}
        handleAnswer={handleConfirmationDialogAnswer}
        message={
          selectedUsersLength > 1
            ? t('alertMessage.addUsersMessage', {
              usersLength: selectedUsersLength,
            })
            : t('alertMessage.addUserMessage')
        }
        preferredAnswer="agree"
      />
    </>
  );
};

export default AddDialogContent;
