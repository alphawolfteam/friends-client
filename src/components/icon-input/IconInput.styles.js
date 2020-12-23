import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '50.5%',
    height: '10vh',
    marginBottom: '30%',
    marginTop: '0',
  },
  button: {
    position: 'relative',
    zIndex: 2,
    top: '100%',
    left: '10%',
    background: 'white',
    color: 'black',
    padding: '5%',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    fontSize: '2vw',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
  },
  swiperSlide: {
    listStyle: 'none',
    paddingInlineStart: 0,
  },
  swiper: {
    '&:last-child': {
      color: '#000 !important',
      fill: 'black!important',
      stroke: 'black!important',
    },
  },
  img: {
    // position: 'absolute',
    maxWidth: '100%',
    width: '100%',
    height: '100%',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    borderRadius: '50%',
    zIndex: 1,
    // top: '50%',
    // left: '50%',
    transform: 'translate( 25%, -30%)',
  },
}));

export default useStyles;
