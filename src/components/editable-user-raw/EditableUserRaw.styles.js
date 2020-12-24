import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1%',
    width: '90%',
    height: '50%',
    boxShadow: 'inset 0 0 0.1vw 0 grey',
  },
  cardContent: {
    padding: '0.5%',
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: '0.5%',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  userTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: config.style.fontFamily,
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
  },
  hover: {
    '&:hover': {
      backgroundColor: config.style.hoverColor,
    },
  },
  iconButton: {
    color: config.style.primaryColor,
    width: '3vw',
    height: '3vh',
    '&:hover': {
      background: 'white',
    },
  },
  userName: {
    fontWeight: '700',
    fontFamily: config.style.fontFamily,
  },
  manager: {
    fontWeight: '500',
    fontSize: '0.8vw',
    paddingLeft: '1%',
    fontFamily: config.style.fontFamily,
  },
  hierarchyFlat: {
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
    wordBreak: 'break-all',
    boxShadow: 'inset 0 0.03vw 0 0 grey',
  },
}));

export default useStyles;
