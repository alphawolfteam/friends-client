import React, { useState, useEffect } from 'react';
import groupIconsCodes from '../../utils/images/group-icons/group-icons-base64-codes';
import useStyles from './IconInput.styles';
import IconsSwiper from '../icons-swiper/IconsSwiper';
import AddIconButton from '../add-icon-button/AddIconButton';

const IconInput = ({ initialIcon, onChange }) => {
  const classes = useStyles();
  const [iconsOptions, setIconsOptions] = useState(groupIconsCodes);
  const [selectedIcon, setSelectedIcon] = useState(initialIcon);

  useEffect(() => {
    if (!iconsOptions.includes(initialIcon)) {
      setIconsOptions((prevValue) => [initialIcon, ...prevValue]);
    }
  }, []);

  useEffect(() => {
    if (selectedIcon) {
      onChange(selectedIcon);
    }
  }, [selectedIcon]);

  return (
    <div className={classes.root}>
      <AddIconButton
        iconsOptions={iconsOptions}
        setIconsOptions={setIconsOptions}
        setSelectedIcon={setSelectedIcon}
      />
      <IconsSwiper
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
        iconsOptions={iconsOptions}
      />
    </div>
  );
};

export default IconInput;
