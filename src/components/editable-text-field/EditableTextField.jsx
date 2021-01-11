import React, { useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
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
}) => {
  const classes = useStyles();
  const [textareaValue, setTextareaValue] = useState(value);

  return (
    <div className={classes.root} style={{ width }}>
      <TextareaAutosize
        rows={rows}
        rowsMax={rows}
        placeholder={placeholder}
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
        className={`${classes.textbox} ${editMode ? classes.active : ''}`}
        disabled={!editMode}
      />
      { editMode
        ? (
          <div className={classes.iconsSection}>
            <CheckOutlined
              onClick={() => onSave(textareaValue)}
              className={classes.icon}
            />
            <ClearOutlined
              onClick={() => {
                setTextareaValue(value);
                setEditMode(false);
              }}
              className={classes.icon}
            />
          </div>
        )
        : (
          <div className={classes.iconsSection}>
            <EditOutlined
              onClick={() => setEditMode(true)}
              className={classes.icon}
            />
          </div>
        )}
    </div>
  );
};

export default EditableTextField;
