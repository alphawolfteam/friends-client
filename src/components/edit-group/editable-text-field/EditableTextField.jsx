import React, { useState } from 'react';
import { TextareaAutosize, CircularProgress, IconButton } from '@material-ui/core';
import { EditOutlined, CheckOutlined, ClearOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './EditableTextField.styles';
import CustomeTooltip from '../../shared/custome-tooltip/CustomeTooltip';

const EditableTextField = ({
  rows,
  width,
  placeholder,
  value,
  onSave,
  editMode,
  setEditMode,
  isLoading,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [textareaValue, setTextareaValue] = useState(value);

  return (
    <div className={`${classes.root} ${editMode ? classes.active : ''}`} style={{ width }}>
      <TextareaAutosize
        rows={rows}
        rowsMax={rows}
        placeholder={placeholder}
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        className={classes.textbox}
        disabled={!editMode}
      />
      { editMode
        ? (
          <div className={classes.iconsSection}>
            <CustomeTooltip
              title={t('tooltip.save')}
              element={(
                <IconButton
                  disabled={isLoading}
                  onClick={() => onSave(textareaValue)}
                  className={classes.icon}
                >
                  <CheckOutlined />
                </IconButton>
              )}
            />
            <CustomeTooltip
              title={t('tooltip.cancel')}
              element={(
                <IconButton
                  disabled={isLoading}
                  onClick={() => {
                    setTextareaValue(value);
                    setEditMode(false);
                  }}
                  className={classes.icon}
                >
                  <ClearOutlined />
                </IconButton>
              )}
            />
            { isLoading && <CircularProgress size={25} className={classes.fabProgress} />}
          </div>
        )
        : (
          <div className={classes.iconsSection}>
            <CustomeTooltip
              title={t('tooltip.edit')}
              element={(
                <IconButton
                  onClick={() => setEditMode(true)}
                  className={classes.icon}
                >
                  <EditOutlined />
                </IconButton>
              )}
            />
          </div>
        )}
    </div>
  );
};

export default EditableTextField;
