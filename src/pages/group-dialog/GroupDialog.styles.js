import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles((theme) => ({
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '15vw',
  },
  groupName: {
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
    fontSize: '1em',
    marginLeft: '2%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  groupIcon: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '7rem',
    height: '7rem',
    overflow: 'hidden',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    marginBottom: '2%',
  },
  titleIcon: {
    marginLeft: '5%',
    fontSize: '1.7rem',
  },
  title: {
    fontSize: '1.2rem',
    direction: 'rtl',
    display: 'flex',
    alignSelf: 'flex-end',
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
  },
  groupDescription: {
    maxHeight: '8vh',
    direction: 'rtl',
    width: '95%',
    overflow: 'auto',
    fontSize: '1rem',
    fontFamily: config.style.fontFamily,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: config.style.primaryColor,
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
  divider: {
    border: '0',
    clear: 'both',
    display: 'block',
    width: '96%',
    backgroundColor: 'lightgrey',
    height: '0.1vh',
  },
  actions: {
    flex: '1 0 0',
  },
  button: config.style.button,
}));

export default useStyles;
