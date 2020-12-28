import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './AddGroupDialog.styles';
import EditableGroupDialogTemplate from '../../components/editable-group-dialog-template/EditableGroupDialogTemplate';
import userContext from '../../stores/userStore';
import refreshDataContext from '../../stores/refreshDataStore';
import config from '../../appConf';
import groupIconsCodes from '../../images/group-icons/group-icons-base64-codes';
import GroupsService from '../../services/GroupsService';

const { getRole } = config;
const DEFAULT_TYPE = 'private';
const DEFAULT_ICON = groupIconsCodes[0];

const AddGroupDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = useContext(userContext);
  const refreshData = useContext(refreshDataContext);
  const [newGroup, setNewGroup] = useState({
    name: '',
    description: '',
    tags: [],
    type: DEFAULT_TYPE,
    users: [
      {
        id: currentUser.id,
        role: getRole('manager').code,
      }],
    icon: DEFAULT_ICON,
  });

  const handleAdd = async () => {
    // TODO: Add loader
    if (newGroup.name && newGroup.description && newGroup.users.length > 1) {
      await GroupsService.createGroup(newGroup);
      refreshData();
      onClose();
    }
  };

  const dialogActions = () => (
    <>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => handleAdd()}
      >
        {t('button.add')}
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => onClose()}
      >
        {t('button.cancel')}
      </Button>
    </>
  );

  return (
    <EditableGroupDialogTemplate
      newGroup={newGroup}
      setNewGroup={setNewGroup}
      actions={dialogActions()}
      open={open}
      onClose={onClose}
    />
  );
};

export default AddGroupDialog;
