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
import TagsInputFields from '../../components/tags-input-fields/TagsInputFields';
import userContext from '../../stores/userStore';
import refreshDataContext from '../../stores/refreshDataStore';
import groupIconsCodes from '../../utils/images/group-icons/group-icons-base64-codes';
// import GroupsService from '../../services/GroupsService';
import GroupsService from '../../services/Mock/GroupsService';
import ValidationService from '../../services/ValidationService';
import { getRole } from '../../utils/sharedFunctions';
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
        // TODO: Add loader
        GroupsService.createGroup(newGroup)
          .then(() => {
            // TODO: Update only
            refreshData();
            onClose();
          })
          .catch(() => enqueueSnackbar(t('error.server'), { variant: 'error' }));
      } else {
        setOpenValidationMessage(true);
      }

      return newValue;
    });
  };

  const renderDialogTitle = () => (
    <>
      <IconInput
        initialIcon={DEFAULT_ICON}
        onChange={(newIcon) => setNewGroup((prevValue) => {
          return { ...prevValue, icon: newIcon };
        })}
      />
      <div className={classes.title}>
        <GroupNameInput group={newGroup} setGroup={setNewGroup} />
        <LockIconInput newGroup={newGroup} setNewGroup={setNewGroup} />
      </div>
    </>
  );

  const firstPage = (
    <UsersInputFields group={newGroup} setGroup={setNewGroup} />
  );

  const secondPage = (
    <div className={classes.page}>
      <GroupDescriptionInput group={newGroup} setGroup={setNewGroup} />
      <TagsInputFields group={newGroup} setGroup={setNewGroup} />
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
    </>
  );
};

export default AddGroupDialog;
