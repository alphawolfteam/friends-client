import React, { useState } from 'react';
import {
  TextareaAutosize,
  CircularProgress,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { EditOutlined, CheckOutlined, ClearOutlined } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import useStyles from './EditableTextField.styles';

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

  const renderDeafultButtons = () => (
    <div className={classes.iconsSection}>
      <Tooltip title={t('tooltip.edit')}>
        <IconButton
          onClick={() => setEditMode(true)}
          className={classes.icon}
          size="small"
        >
          <EditOutlined />
        </IconButton>
      </Tooltip>
    </div>
  );

  const renderEditModeButtons = () => (
    (
      <div className={classes.iconsSection}>
        <Tooltip title={t('tooltip.save')}>
          <IconButton
            disabled={isLoading}
            onClick={() => onSave(textareaValue)}
            className={classes.icon}
            size="small"
          >
            <CheckOutlined />
          </IconButton>
        </Tooltip>
        <Tooltip title={t('tooltip.cancel')}>
          <IconButton
            disabled={isLoading}
            onClick={() => {
              setTextareaValue(value);
              setEditMode(false);
            }}
            className={classes.icon}
            size="small"
          >
            <ClearOutlined />
          </IconButton>
        </Tooltip>
        { isLoading && <CircularProgress size={25} />}
      </div>
    )
  );

  return (
    <div
      className={`${classes.root} ${editMode ? classes.active : ''}`}
      style={{ width }}
    >
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
        ? renderEditModeButtons()
        : renderDeafultButtons()}
    </div>
  );
};

export default EditableTextField;
