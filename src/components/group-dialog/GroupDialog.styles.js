import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  content: {
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3%',
  },
  groupTitle: {
    display: 'flex',
  },
  groupIcon: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '4em',
    height: '4em',
    overflow: 'hidden',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    marginLeft: '5%',
    marginBottom: '2%',
  },
  titleIcon: {
    marginLeft: '5%',
    fontSize: '1.5vw',
  },
  title: {
    fontSize: '1vw',
    display: 'flex',
    alignSelf: 'flex-end',
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
  },
  groupDescription: {
    fontSize: '1vw',
    fontFamily: config.style.fontFamily,
    alignSelf: 'flex-end',
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
