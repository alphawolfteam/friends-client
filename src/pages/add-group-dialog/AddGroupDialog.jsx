import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import DialogTemplate from '../../components/dialog-template/DialogTemplate';
import AlertValidationMessage from '../../components/alert-validation-message/AlertValidationMessage';
import IconInput from '../../components/icon-input/IconInput';
import GroupNameInput from '../../components/group-name-input/GroupNameInput';
import LockIconInput from '../../components/lock-icon-input/LockIconInput';
import UsersInputFields from '../../components/users-input-fields/UsersInputFields';
import Paging from '../../components/paging/Paging';
import GroupDescriptionInput from '../../components/group-description-input/GroupDescriptionInput';
import CustomeBackdrop from '../../components/custome-backdrop/CustomeBackdrop';
import TagsInputFields from '../../components/tags-input-fields/TagsInputFields';
import userContext from '../../stores/userStore';
import refreshDataContext from '../../stores/refreshDataStore';
import groupIconsCodes from '../../utils/images/group-icons/group-icons-base64-codes';
// import GroupsService from '../../services/GroupsService';
import GroupsService from '../../services/Mock/GroupsService';
import ValidationService from '../../services/ValidationService';
import {
  getRole,
  setNewGroupIcon,
  setNewGroupType,
  setNewGroupUser,
  removeGroupUser,
  setNewGroupUserRole,
  setNewGroupTag,
  removeGroupTag,
} from '../../utils/sharedFunctions';
import useStyles from './AddGroupDialog.styles';

const DEFAULT_TYPE = 'private';
const DEFAULT_ICON = groupIconsCodes[0];

const AddGroupDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const refreshData = useContext(refreshDataContext);
  const [openValidationMessage, setOpenValidationMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validationArray, setValidationArray] = useState([]);
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

  const handleAdd = async () => {
    setValidationArray(() => {
      const newValue = ValidationService.validateGroupObject(newGroup);

      if (newValue.length === 0) {
        setIsLoading(true);
        GroupsService.createGroup({
          ...newGroup,
          users: [...newGroup.users.map((userObject) => {
            return { id: userObject.user.id, role: userObject.role };
          })],
        })
          .then(() => {
            // TODO: Update only
            refreshData();
            onClose();
          })
          .catch(() => {
            setIsLoading(false);
            enqueueSnackbar(t('error.server'), { variant: 'error' });
          });
      } else {
        setOpenValidationMessage(true);
      }

      return newValue;
    });
  };

  const renderDialogTitle = () => (
    <>
      <IconInput
        shownIcon={newGroup.icon}
        initialIcon={DEFAULT_ICON}
        onChange={(newIcon) => setNewGroupIcon(setNewGroup, newIcon)}
      />
      <div className={classes.title}>
        <GroupNameInput group={newGroup} setGroup={setNewGroup} />
        <LockIconInput
          type={newGroup.type}
          onChange={(newType) => setNewGroupType(setNewGroup, newType)}
        />
      </div>
    </>
  );

  const firstPage = (
    <UsersInputFields
      groupUsers={newGroup.users}
      onAdd={(userToAdd, role) => setNewGroupUser(setNewGroup, userToAdd, role)}
      onRemove={(userObjectToRemove) => removeGroupUser(setNewGroup, userObjectToRemove)}
      onChangeRole={(userObjectToUpdate, newRole) => setNewGroupUserRole(
        setNewGroup,
        userObjectToUpdate,
        newRole,
      )}
    />
  );

  const secondPage = (
    <div className={classes.page}>
      <GroupDescriptionInput group={newGroup} setGroup={setNewGroup} />
      <TagsInputFields
        tagsList={newGroup.tags}
        onAdd={(newTag) => setNewGroupTag(setNewGroup, newTag)}
        onRemove={(tagToRemove) => removeGroupTag(setNewGroup, tagToRemove)}
      />
    </div>
  );

  const renderDialogContent = () => (
    <Paging pages={[firstPage, secondPage]} />
  );

  const renderDialogActions = () => (
    <>
      <Button onClick={() => handleAdd()}>
        {t('button.add')}
      </Button>
      <Button onClick={() => onClose()}>
        {t('button.cancel')}
      </Button>
    </>
  );

  return (
    <>
      <DialogTemplate
        title={renderDialogTitle()}
        content={renderDialogContent()}
        actions={renderDialogActions()}
        open={open}
      />
      <AlertValidationMessage
        validationArray={validationArray}
        open={openValidationMessage}
        onClose={() => setOpenValidationMessage(false)}
      />
      <CustomeBackdrop open={isLoading} />
    </>
  );
};

export default AddGroupDialog;
