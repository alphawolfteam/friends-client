import React from 'react';
import { Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import AddTagInput from '../add-tag-input/AddTagInput';
import DeletableTag from '../deletable-tag/DeletableTag';
import ValidationService from '../../../services/ValidationService';
import useStyles from './TagsInputFields.styles';
import CustomeSnackbarContent from '../custome-snackbar-content/CustomeSnackbarContent';

const TagsInputFields = ({ tagsList, onAdd, onRemove }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const handleAddTag = (newTag) => {
    const validationResult = ValidationService.validateNewGroupTag(tagsList, newTag);
    if (validationResult === null) {
      onAdd(newTag);
    } else {
      enqueueSnackbar(<CustomeSnackbarContent message={t(`error.${validationResult}`)} />);
    }
  };

  return (
    <div className={classes.root}>
      <AddTagInput onAdd={(newTag) => handleAddTag(newTag)} />
      <div className={classes.tagsList}>
        {tagsList.length > 0 ? (
          <>
            {tagsList.map((tag) => (
              <DeletableTag
                tag={tag.label}
                key={tag.label}
                onRemove={() => onRemove(tag.label)}
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
