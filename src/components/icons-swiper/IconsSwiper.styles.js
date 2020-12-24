import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
    width: '3.5em',
    height: '3.5em',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    borderRadius: '50%',
    zIndex: 1,
    transform: 'translate( 20%, -55%)',
    verticalAlign: 'super',
  },
}));

export default useStyles;
