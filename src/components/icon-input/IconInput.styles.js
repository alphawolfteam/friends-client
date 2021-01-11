import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '50%',
    height: '10vh',
    marginBottom: '6rem',
    paddingTop: '0',
    position: 'relative',
  },
  backdrop: {
    zIndex: 2,
    position: 'absolute',
    background: 'none',
    width: '11rem',
    height: '10rem',
    right: '-1rem',
    top: '1.5rem',
  },
  circle: {
    strokeLinecap: 'round',
  },
  top: {
    position: 'absolute',
  },
  bottom: {
    color: 'lightgrey',
  },
}));

export default useStyles;
