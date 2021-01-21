import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import {
  setNewGroupTag,
  removeGroupTag,
} from '../../shared/sharedFunctions';
import EditableGroupDescription from '../editable-group-description/EditableGroupDescription';
import TagsInputFields from '../../shared/tags-input-fields/TagsInputFields';
import GroupsService from '../../../services/GroupsService';
import useStyles from './EditInfoPage.styles';
import CustomeSnackbarContent from '../../shared/custome-snackbar-content/CustomeSnackbarContent';

const EditInfoPage = ({ group, setGroup }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [removeTagLoaders, setRemoveTagLoaders] = useState([]);

  const handleAddTag = (newTag) => {
    setNewGroupTag(setGroup, newTag);
    GroupsService.addTagToGroup(group._id, newTag)
      .catch(() => {
        enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        );
        removeGroupTag(setGroup, newTag);
      });
  };

  const handleRemoveTag = (tagToRemove) => {
    setRemoveTagLoaders((prevValue) => [...prevValue, tagToRemove]);
    GroupsService.removeTagFromGroup(group._id, tagToRemove)
      .then(() => {
        removeGroupTag(setGroup, tagToRemove);
      })
      .catch(() => {
        enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        );
      }).finally(() => {
        setRemoveTagLoaders((prevValue) => prevValue.filter((id) => (
          id !== tagToRemove)));
      });
  };

  return (
    <div className={classes.root}>
      <EditableGroupDescription
        group={group}
        setGroup={setGroup}
      />
      <TagsInputFields
        tagsList={group.tags}
        onAdd={handleAddTag}
        onRemove={handleRemoveTag}
        removeTagLoaders={removeTagLoaders}
      />
    </div>
  );
};

export default EditInfoPage;
