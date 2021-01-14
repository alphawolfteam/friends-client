import React, { useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import useStyles from './EditableTextField.styles';
import EditButtons from '../edit-buttons/EditButtons';

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
      <EditButtons
        editMode={editMode}
        onSave={() => onSave(textareaValue)}
        onCancel={() => {
          setTextareaValue(value);
          setEditMode(false);
        }}
        onEdit={() => setEditMode(true)}
        isLoading={isLoading}
      />
    </div>
  );
};

export default EditableTextField;
