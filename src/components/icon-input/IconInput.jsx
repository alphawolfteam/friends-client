import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { AddAPhoto } from '@material-ui/icons';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import groupIconsCodes from '../../images/group-icons/group-icons-base64-codes';
import useStyles from './IconInput.styles';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const IconInput = ({ group, setGroup }) => {
  const classes = useStyles();
  const [iconsOptions, setIconsOptions] = useState(groupIconsCodes);
  const [selectedIcon, setSelectedIcon] = useState(group.icon);

  useEffect(() => {
    setGroup((prevValue) => {
      return { ...prevValue, icon: selectedIcon };
    });
  }, [selectedIcon]);

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

  const addAPhotoButton = () => (
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
  );

  const photosSwiper = () => (
    <Swiper
      tag="section"
      wrapperTag="ul"
      navigation
    >
      {iconsOptions.map((iconOption, i) => (
        <SwiperSlide className={classes.swiperSlide} key={i} tag="li">
          <img className={classes.img} src={iconOption} alt="swiper" />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className={classes.root}>
      {addAPhotoButton()}
      {photosSwiper()}
    </div>
  );
};

export default IconInput;
