import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '4em',
    height: '4em',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    marginLeft: '5%',
    marginBottom: '2%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'relative',
    zIndex: 1,
    top: '35%',
    left: '35%',
    background: 'white',
    color: 'black',
    padding: '5%',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    fontSize: '2vw',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
  },
  img: {
    position: 'absolute',
    maxWidth: '100%',
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    transform: 'translate( -50%, -50%)',
  },
}));

export default useStyles;
