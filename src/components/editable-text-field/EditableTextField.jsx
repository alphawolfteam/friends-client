import React, { useState } from 'react';
import { TextareaAutosize, CircularProgress, IconButton } from '@material-ui/core';
import { EditOutlined, CheckOutlined, ClearOutlined } from '@material-ui/icons';
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
            <IconButton
              disabled={isLoading}
              onClick={() => onSave(textareaValue)}
              className={classes.icon}
            >
              <CheckOutlined />
            </IconButton>
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
            { isLoading && <CircularProgress size={25} className={classes.fabProgress} />}
          </div>
        )
        : (
          <div className={classes.iconsSection}>
            <IconButton
              onClick={() => setEditMode(true)}
              className={classes.icon}
            >
              <EditOutlined />
            </IconButton>
          </div>
        )}
    </div>
  );
};

export default EditableTextField;
