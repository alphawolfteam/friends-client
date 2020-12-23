import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    '&:last-child': {
      color: '#000 !important',
      fill: 'black!important',
      stroke: 'black!important',
    },
  },
  swiperSlide: {
    listStyle: 'none',
    paddingInlineStart: 0,
  },
  img: {
    maxWidth: '100%',
    width: '100%',
    height: '100%',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    borderRadius: '50%',
    zIndex: 1,
    transform: 'translate( 25%, -30%)',
  },
}));

export default useStyles;
