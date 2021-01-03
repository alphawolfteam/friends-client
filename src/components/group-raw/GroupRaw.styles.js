import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1%',
    width: '85%',
    borderRadius: 15,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0 0.2vw 0.4vw, rgba(0, 0, 0, 0.23) 0 0.2vw 0.4vw',
    border: `0.1vw solid ${config.style.primaryColor}`,
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.25) 0 1vw 1.5vw, rgba(0, 0, 0, 0.22) 0px 0.5vw 0.5vw',
    },
    display: 'flex',
    justifyContent: 'space-around',
  },
  buttonBase: {
    width: '100%',
  },
  cardContent: {
    direction: 'rtl',
    color: config.style.fontColor,
    padding: '0.5%',
    width: '100%',
    height: '13vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '&:last-child': {
      paddingBottom: '0.5%',
    },
  },
  mainContent: {
    display: 'flex',
    alignItems: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '3%',
    paddingBottom: '3%',
    paddingLeft: '1%',
    width: '10%',
  },
  tagsList: {
    width: '30%',
  },
  groupAmount: {
    fontFamily: config.style.fontFamily,
    fontSize: '1em',
    fontWeight: '700',
  },
  groupName: {
    fontFamily: config.style.fontFamily,
    textAlign: 'right',
    width: '10vw',
    fontSize: '1.8em',
    fontWeight: '700',
    marginRight: '5%',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  groupIcon: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '6em',
    height: '6em',
    overflow: 'hidden',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
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
