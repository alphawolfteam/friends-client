import { makeStyles } from '@material-ui/core/styles';
import config from './appConf';
import nextArrow from './images/nextArrow.svg';
import prevArrow from './images/prevArrow.svg';

const useStyles = makeStyles(() => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      background: '#E5E5E5',
      'border-radius': '50em',
    },
    '*::-webkit-scrollbar-thumb': {
      background: '#898989',
      'border-radius': '50em',
    },
    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 30vw white inset !important',
    },
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
  app: {
    backgroundColor: config.style.backgroundColor,
    height: 'calc(100vh - 16px)',
  },
  loading: {
    display: 'flex',
    backgroundColor: config.style.backgroundColor,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '5%',
    height: '98vh',
    width: '99vw',
  },
  text: {
    fontFamily: config.style.fontFamily,
    fontWeight: 700,
    marginTop: '4%',
    marginBottom: '2%',
  },
  friendsLogo: {
    width: '40vw',
    height: '25vh',
  },
  unitLogo: {
    width: '30%',
    height: '20%',
  },
}));

export default useStyles;
