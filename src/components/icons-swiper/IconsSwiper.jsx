import React, { useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useStyles from './IconsSwiper.styles';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const IconsSwiper = ({
  setGroup, selectedIcon, setSelectedIcon, iconsOptions,
}) => {
  const classes = useStyles();

  useEffect(() => {
    setGroup((prevValue) => {
      return { ...prevValue, icon: selectedIcon };
    });
  }, [selectedIcon]);

  return (
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      navigation
      spaceBetween={0}
      slidesPerView={1}
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
