import React, { useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import { EditOutlined, CheckOutlined } from '@material-ui/icons';
import useStyles from './EditableTextField.styles';

const EditableTextField = ({
  rows,
  width,
  placeholder,
  value,
  onSave,
}) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  const [textareaValue, setTextareaValue] = useState(value);

  return (
    <div className={classes.root} style={{ width }}>
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
          <CheckOutlined
            onClick={() => {
              console.log(onSave(textareaValue));
              if (onSave(textareaValue)) {
                setEditMode(false);
              }
            }}
            className={classes.icon}
          />
        )
        : (
          <EditOutlined
            onClick={() => setEditMode(true)}
            className={classes.icon}
          />
        )}
    </div>
  );
};

export default EditableTextField;
