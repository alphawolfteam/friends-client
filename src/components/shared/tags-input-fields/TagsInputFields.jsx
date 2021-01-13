import React from 'react';
import { Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import AddTagInput from '../add-tag-input/AddTagInput';
import DeletableTag from '../deletable-tag/DeletableTag';
import ValidationService from '../../../services/ValidationService';
import useStyles from './TagsInputFields.styles';
import CustomeSnackbarContent from '../custome-snackbar-content/CustomeSnackbarContent';
import config from '../../../appConf';

const TagsInputFields = ({ tagsList, onAdd, onRemove }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const isValidated = (newTag) => {
    const validationResult = ValidationService.validateNewGroupTag(
      tagsList,
      newTag,
      config.length_limitations.min_length_tag,
    );
    if (validationResult === null) {
      return true;
    }
    enqueueSnackbar(
      <CustomeSnackbarContent message={t(
        `error.${validationResult}`,
        { minTagLength: String(config.length_limitations.min_length_tag) },
      )}
      />,
    );
    return false;
  };

  return (
    <div className={classes.root}>
      <AddTagInput
        onAdd={(newTag) => onAdd(newTag)}
        isValidated={(newTag) => isValidated(newTag)}
      />
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
