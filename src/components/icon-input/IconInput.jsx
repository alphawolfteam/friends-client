import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons';
import groupIconsCodes from '../../images/group-icons/group-icons-base64-codes';
import useStyles from './IconInput.styles';

const IconInput = ({ group }) => {
// const IconInput = ({ group, setGroup }) => {
  const classes = useStyles();
  const [iconsOptions, setIconsOptions] = useState(groupIconsCodes);
  const [selectedIcon, setSelectedIcon] = useState(group.icon);

  useEffect(() => {
    if (!iconsOptions.includes(group.icon)) {
      setIconsOptions((prevValue) => [...prevValue, group.icon]);
    }
  }, [group.icon]);

  const handleOnChange = async (event) => {
    // TODO: Alert error
    const file = event.target.files[0];
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const newIcon = reader.result;
        if (!iconsOptions.includes(file)) {
          setIconsOptions((prevValue) => [...prevValue, newIcon]);
        }
        setSelectedIcon(newIcon);
      };
    }
  };

  return (
    <div className={classes.root}>
      <IconButton
        variant="contained"
        component="label"
        className={classes.button}
      >
        <AddAPhoto />
        <input
          type="file"
          hidden
          multiple
          onChange={(e) => handleOnChange(e)}
        />
      </IconButton>
      <img className={classes.img} src={selectedIcon} alt="icon" />
    </div>
  );
};

export default IconInput;
