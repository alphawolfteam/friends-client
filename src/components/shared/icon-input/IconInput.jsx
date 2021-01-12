import React, { useState, useEffect } from 'react';
import { CircularProgress, Backdrop } from '@material-ui/core';
import groupIconsCodes from '../../../utils/images/group-icons/group-icons-base64-codes';
import useStyles from './IconInput.styles';
import IconsSwiper from '../icons-swiper/IconsSwiper';
import AddIconButton from '../add-icon-button/AddIconButton';

const IconInput = ({
  shownIcon,
  initialIcon,
  onChange,
  isLoading,
}) => {
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
        setSelectedIcon={setSelectedIcon}
        shownIcon={shownIcon}
      />
      <Backdrop className={classes.backdrop} open={isLoading === true}>
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={50}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={50}
          thickness={4}
        />
      </Backdrop>
    </div>
  );
};

export default IconInput;
