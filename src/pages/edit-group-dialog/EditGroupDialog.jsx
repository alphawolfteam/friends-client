import React, { useState, useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import refreshDataContext from '../../stores/refreshDataStore';
import DialogTemplate from '../../components/dialog-template/DialogTemplate';
import IconInput from '../../components/icon-input/IconInput';
import GroupNameInput from '../../components/group-name-input/GroupNameInput';
import LockIconInput from '../../components/lock-icon-input/LockIconInput';
import UsersInputFields from '../../components/users-input-fields/UsersInputFields';
import Paging from '../../components/paging/Paging';
import { getUserIndex } from '../../utils/sharedFunctions';
import GroupDescriptionInput from '../../components/group-description-input/GroupDescriptionInput';
import TagsInputFields from '../../components/tags-input-fields/TagsInputFields';
import AlertDialogTemplate from '../../components/alert-dialog-template/AlertDialogTemplate';
// import GroupsService from '../../services/GroupsService';
import GroupsService from '../../services/Mock/GroupsService';
import useStyles from './EditGroupDialog.styles';

const EditGroupDialog = ({
  group, open, onClose,
}) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const refreshData = useContext(refreshDataContext);
  const [openAlertDeleteDialog, setOpenAlertDeleteDialog] = useState(false);
  const [dialogDeleteAnswer, setDialogDeleteAnswer] = useState(undefined);
  const [newGroup, setNewGroup] = useState(group);

  useEffect(async () => {
    if (dialogDeleteAnswer === 'agree') {
      // TODO: Add loader
      GroupsService.deleteGroup(group._id)
        .then(() => {
          // TODO: Update only
          refreshData();
        })
        .catch(() => enqueueSnackbar(t('error.server'), { variant: 'error' }));
    }
  }, [dialogDeleteAnswer]);

  const handleDeleteGroup = () => {
    setOpenAlertDeleteDialog(true);
  };

  const renderDialogTitle = () => (
    <>
      <IconInput
        shownIcon={newGroup.icon}
        initialIcon={group.icon}
        onChange={(newIcon) => {
          let prevIcon;
          setNewGroup((prevValue) => {
            prevIcon = prevValue.icon;
            return { ...prevValue, icon: newIcon };
          });
          // TODO: Add loader
          GroupsService.updateGroupDetails(group._id, { ...group, icon: newIcon })
            .catch(() => {
              setNewGroup((prevValue) => {
                return { ...prevValue, icon: prevIcon };
              });
              enqueueSnackbar(t('error.server'), { variant: 'error' });
            });
        }}
      />
      <div className={classes.title}>
        {/* TODO: New component */}
        <GroupNameInput group={newGroup} setGroup={setNewGroup} />
        <LockIconInput
          type={newGroup.type}
          onChange={(newType) => {
            // TODO: Add loader
            GroupsService.updateGroupDetails(group._id, { ...group, type: newType })
              .then(() => {
                setNewGroup((prevValue) => {
                  return { ...prevValue, type: newType };
                });
              })
              .catch(() => {
                enqueueSnackbar(t('error.server'), { variant: 'error' });
              });
          }}
        />
      </div>
    </>
  );

  const firstPage = (
    <UsersInputFields
      groupUsers={newGroup.users}
      onAdd={(userToAdd, role) => {
        // TODO: Add loader
        GroupsService.addUserToGroup(group._id, { id: userToAdd.id, role })
          .then(() => {
            setNewGroup((prevValue) => ({
              ...prevValue,
              users: [
                ...prevValue.users,
                { user: { ...userToAdd }, role },
              ],
            }));
          })
          .catch(() => {
            enqueueSnackbar(t('error.server'), { variant: 'error' });
          });
      }}
      onRemove={(userObject) => {
        // TODO: Add loader
        GroupsService.removeUserFromGroup(group._id, userObject.user.id)
          .then(() => {
            setNewGroup((prevValue) => {
              const usersList = [...prevValue.users];
              usersList.splice(getUserIndex(usersList, userObject), 1);
              return { ...prevValue, users: usersList };
            });
          })
          .catch(() => {
            enqueueSnackbar(t('error.server'), { variant: 'error' });
          });
      }}
      onChangeRole={(userObject, newRole) => {
        // TODO: Add loader
        GroupsService.updateUserRole(group._id, userObject.user.id, newRole)
          .then(() => {
            setNewGroup((prevValue) => {
              const usersList = [...prevValue.users];
              usersList[getUserIndex(usersList, userObject)].role = newRole;
              return { ...prevValue, users: usersList };
            });
          })
          .catch(() => {
            enqueueSnackbar(t('error.server'), { variant: 'error' });
          });
      }}
    />
  );

  const secondPage = (
    <div className={classes.page}>
      {/* TODO: New component */}
      <GroupDescriptionInput group={newGroup} setGroup={setNewGroup} />
      <TagsInputFields group={newGroup} setGroup={setNewGroup} />
    </div>
  );

  const renderDialogContent = () => (
    <Paging pages={[firstPage, secondPage]} />
  );

  const renderDialogActions = () => (
    <Button onClick={() => handleDeleteGroup()}>
      {t('button.deleteGroup')}
    </Button>
  );

  return (
    <>
      <DialogTemplate
        title={renderDialogTitle()}
        content={renderDialogContent()}
        actions={renderDialogActions()}
        open={open}
        onClose={() => onClose()}
      />
      <AlertDialogTemplate
        message={t('alertMessage.deleteGroup')}
        open={openAlertDeleteDialog}
        onClose={() => setOpenAlertDeleteDialog(false)}
        handleAnswer={(answer) => setDialogDeleteAnswer(answer)}
        preferredAnswer="disagree"
      />
    </>
  );
};

export default EditGroupDialog;
