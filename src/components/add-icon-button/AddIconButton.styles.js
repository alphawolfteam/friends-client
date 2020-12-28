import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {},
  iconButton: {
    position: 'relative',
    zIndex: 2,
    top: '110%',
    left: '5%',
    background: 'white',
    color: 'black',
    padding: '5%',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    fontSize: '2vw',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
  },
  icon: {
    width: '0.6em',
    height: '0.6em',
  },
}));

export default useStyles;
