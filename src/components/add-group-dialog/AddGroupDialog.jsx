import React from 'react';
// import React, { useState } from 'react';
import useStyles from './AddGroupDialog.styles';

const AddGroupDialog = () => {
  const classes = useStyles();
  // const [newGroup, setNewGroup] = useState({});

  return (
    <div className={classes.root} />
  );
};

export default AddGroupDialog;
