import React from 'react';
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

const EditInfoPage = ({ newGroup, setNewGroup }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const handleAddTag = (newTag) => {
    // TODO: Add loader
    GroupsService.addTagToGroup(newGroup._id, newTag)
      .then(() => {
        setNewGroupTag(setNewGroup, newTag);
      })
      .catch(() => {
        enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        );
      });
  };

  const handleRemoveTag = (tagToRemove) => {
    // TODO: Add loader
    GroupsService.removeTagFromGroup(newGroup._id, tagToRemove)
      .then(() => {
        removeGroupTag(setNewGroup, tagToRemove);
      })
      .catch(() => {
        enqueueSnackbar(
          <CustomeSnackbarContent message={t('error.server')} />,
          { variant: 'error' },
        );
      });
  };

  return (
    <div className={classes.root}>
      <EditableGroupDescription
        group={newGroup}
        setGroup={setNewGroup}
      />
      <TagsInputFields
        tagsList={newGroup.tags}
        onAdd={handleAddTag}
        onRemove={handleRemoveTag}
      />
    </div>
  );
};

export default EditInfoPage;
