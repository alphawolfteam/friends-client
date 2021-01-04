import React from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import AddTagInput from '../add-tag-input/AddTagInput';
import DeletableTag from '../deletable-tag/DeletableTag';
import GroupService from '../../services/GroupsService';
import useStyles from './TagsInputFields.styles';

const TagsInputFields = ({ group, setGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleRemoveTag = (tagToRemove) => {
    setGroup((prevValue) => {
      const tagsList = [...prevValue.tags].filter((tag) => tag.label !== tagToRemove);
      return { ...prevValue, tags: tagsList };
    });
  };

  const handleAddTag = (newTag) => {
    // TODO: Add alert
    if (newTag !== '' && !GroupService.isTagExist(group.tags, newTag)) {
      setGroup((prevValue) => {
        const tagsList = [...prevValue.tags];
        tagsList.push({ label: newTag });
        return { ...prevValue, tags: tagsList };
      });
    }
  };

  return (
    <div className={classes.root}>
      <AddTagInput onAdd={(newTag) => handleAddTag(newTag)} />
      <div className={classes.tagsList}>
        {group.tags.length > 0 ? (
          <>
            {group.tags.map((tag) => (
              <DeletableTag
                tag={tag.label}
                key={tag.label}
                onDelete={() => handleRemoveTag(tag.label)}
              />
            ))}
          </>
        )
          : (
            <Typography className={classes.message}>
              {t('message.noTagsFound')}
            </Typography>
          )}
      </div>
    </div>
  );
};

export default TagsInputFields;
