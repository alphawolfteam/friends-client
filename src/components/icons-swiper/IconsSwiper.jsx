import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './IconsSwiper.styles';
import 'swiper/swiper.scss';
import './swiper.css';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Controller]);

const IconsSwiper = ({
  setGroup, selectedIcon, setSelectedIcon, iconsOptions,
}) => {
  const classes = useStyles();
  const [controlledSwiper, setControlledSwiper] = useState(null);

  useEffect(() => {
    setGroup((prevValue) => {
      return { ...prevValue, icon: selectedIcon };
    });
    if (controlledSwiper) {
      controlledSwiper.slideTo(iconsOptions.indexOf(selectedIcon));
    }
  }, [selectedIcon, controlledSwiper]);

  return (
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      navigation
      spaceBetween={0}
      slidesPerView={1}
      onSwiper={setControlledSwiper}
      controller={{ control: controlledSwiper }}
      onSlideChange={(swiper) => {
        const { slides } = swiper;
        const currentSlide = slides[swiper.activeIndex];
        const { src } = currentSlide.firstChild;
        setSelectedIcon(src);
      }}
      className={classes.root}
    >
      {iconsOptions.map((iconOption, i) => (
        <SwiperSlide key={`slide-${i}`} tag="li" className={classes.swiperSlide}>
          <img src={iconOption} alt={`Slide ${i}`} className={classes.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default IconsSwiper;
