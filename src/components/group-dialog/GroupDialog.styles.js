import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {},
  groupTitle: {
    display: 'flex',
  },
  groupIcon: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '15vh',
    height: '15vh',
    overflow: 'hidden',
    border: '0.1vw solid black',
    marginLeft: '5%',
  },
  groupDescription: {
    fontSize: '1vw',
    fontFamily: config.style.fontFamily,
    alignSelf: 'flex-end',
  },
  title: {
    display: 'flex',
    alignSelf: 'flex-end',
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
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
  button: config.style.button,
}));

export default useStyles;
