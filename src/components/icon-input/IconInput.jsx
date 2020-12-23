import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons';
import groupIconsCodes from '../../images/group-icons/group-icons-base64-codes';
import useStyles from './IconInput.styles';
import IconsSwiper from '../icons-swiper/IconsSwiper';

const IconInput = ({ group, setGroup }) => {
  const classes = useStyles();
  const [iconsOptions, setIconsOptions] = useState(groupIconsCodes);
  const [selectedIcon, setSelectedIcon] = useState(group.icon);

  useEffect(() => {
    if (!iconsOptions.includes(group.icon)) {
      setIconsOptions((prevValue) => [...prevValue, group.icon]);
    }
  }, []);

  const handleOnChange = async (event) => {
    // TODO: Alert error
    const file = event.target.files[0];
    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const newIcon = reader.result;
        if (!iconsOptions.includes(newIcon)) {
          setIconsOptions((prevValue) => [...prevValue, newIcon]);
        }
      };
    }
  };

  const addAPhotoButton = () => (
    <IconButton
      variant="contained"
      component="label"
      className={classes.button}
    >
      <AddAPhoto />
      <input
        accept="image/*"
        type="file"
        hidden
        multiple
        onChange={(e) => handleOnChange(e)}
      />
    </IconButton>
  );

  return (
    <div className={classes.root}>
      {addAPhotoButton()}
      <IconsSwiper
        setGroup={setGroup}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
        iconsOptions={iconsOptions}
      />
    </div>
  );
};

export default IconInput;
