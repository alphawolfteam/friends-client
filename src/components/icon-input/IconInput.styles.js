import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '4em',
    height: '4em',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
  },
  button: {
    position: 'relative',
    zIndex: 2,
    top: '65%',
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
    width: '100%',
  },
  img: {
    position: 'absolute',
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate( -50%, -50%)',
  },
}));

export default useStyles;
