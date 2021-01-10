import React, { useState, useEffect } from 'react';
import groupIconsCodes from '../../utils/images/group-icons/group-icons-base64-codes';
import useStyles from './IconInput.styles';
import IconsSwiper from '../icons-swiper/IconsSwiper';
import AddIconButton from '../add-icon-button/AddIconButton';

const IconInput = ({ shownIcon, initialIcon, onChange }) => {
  const classes = useStyles();
  const [iconsOptions, setIconsOptions] = useState(groupIconsCodes);
  const [selectedIcon, setSelectedIcon] = useState(initialIcon);

  useEffect(() => {
    if (!iconsOptions.includes(initialIcon)) {
      setIconsOptions((prevValue) => [initialIcon, ...prevValue]);
    }
  }, []);

  useEffect(() => {
    onChange(selectedIcon);
  }, [selectedIcon]);

  return (
    <div className={classes.root}>
      <AddIconButton
        iconsOptions={iconsOptions}
        setSelectedIcon={setSelectedIcon}
        setIconsOptions={setIconsOptions}
      />
      <IconsSwiper
        iconsOptions={iconsOptions}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
        shownIcon={shownIcon}
      />
    </div>
  );
};

export default IconInput;
