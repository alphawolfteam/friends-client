import { makeStyles } from '@material-ui/core/styles';
import nextArrow from '../../utils/images/nextArrow.svg';
import prevArrow from '../../utils/images/prevArrow.svg';

const useStyles = makeStyles(() => ({
  '@global': {
    '.swiper-button-next': {
      'background-image': `url(${nextArrow})`,
      'background-repeat': 'no-repeat',
      'background-size': '100% auto',
      'background-position': 'center',
    },
    '.swiper-button-next::after': {
      display: 'none',
    },
    '.swiper-button-prev': {
      'background-image': `url(${prevArrow})`,
      'background-repeat': 'no-repeat',
      'background-size': '100% auto',
      'background-position': 'center',
    },
    '.swiper-button-prev::after': {
      display: 'none',
    },
  },
  root: {
    marginTop: '6%',
    paddingTop: '22%',
    paddingBottom: '10%',
  },
  swiperSlide: {
    listStyle: 'none',
    paddingInlineStart: 0,
  },
  img: {
    maxWidth: '100%',
    width: '7rem',
    height: '7rem',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    borderRadius: '50%',
    zIndex: 1,
    transform: 'translate( 20%, -55%)',
    verticalAlign: 'super',
  },

}));

export default useStyles;
