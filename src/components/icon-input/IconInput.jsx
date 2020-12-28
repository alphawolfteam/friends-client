import React, { useState, useEffect } from 'react';
import groupIconsCodes from '../../images/group-icons/group-icons-base64-codes';
import useStyles from './IconInput.styles';
import IconsSwiper from '../icons-swiper/IconsSwiper';
import AddIconButton from '../add-icon-button/AddIconButton';

const IconInput = ({ group, setGroup }) => {
  const classes = useStyles();
  const [iconsOptions, setIconsOptions] = useState(groupIconsCodes);
  const [selectedIcon, setSelectedIcon] = useState(group.icon);

  useEffect(() => {
    if (!iconsOptions.includes(group.icon)) {
      setIconsOptions((prevValue) => [...prevValue, group.icon]);
    }
  }, []);

  return (
    <div className={classes.root}>
      <AddIconButton
        iconsOptions={iconsOptions}
        setIconsOptions={setIconsOptions}
        setSelectedIcon={setSelectedIcon}
      />
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
