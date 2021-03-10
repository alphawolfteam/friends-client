import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './IconsSwiper.styles';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Controller]);

const IconsSwiper = ({
  shownIcon, setSelectedIcon, iconsOptions,
}) => {
  const classes = useStyles();
  const [controlledSwiper, setControlledSwiper] = useState(null);

  useEffect(() => {
    if (controlledSwiper && iconsOptions.includes(shownIcon)) {
      controlledSwiper.slideTo(iconsOptions.indexOf(shownIcon));
    }
  }, [shownIcon, controlledSwiper]);

  return (
    <Swiper
      id="main"
      className={classes.root}
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
