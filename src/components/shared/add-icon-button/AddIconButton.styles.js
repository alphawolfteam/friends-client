import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {},
  iconButton: {
    position: 'relative',
    zIndex: 2,
    top: '6rem',
    background: '#e4e6eb',
    color: 'black',
    padding: '5%',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    fontSize: '2rem',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  icon: {
    width: '0.6em',
    height: '0.6em',
  },
}));

export default useStyles;
