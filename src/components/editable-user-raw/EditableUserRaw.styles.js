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
    direction: 'rtl',
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
    alignItems: 'center',
  },
  rolesSelect: {
    marginLeft: '5%',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
    fontWeight: '700',
  },
  text: {
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
    fontWeight: '700',
    width: '100%',
  },
  hover: {
    '&:hover': {
      backgroundColor: config.style.hoverColor,
    },
  },
  iconButton: {
    minWidth: 0,
    height: '3vh',
    '&:hover': {
      background: 'none',
    },
  },
  hierarchyFlat: {
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
    wordBreak: 'break-all',
    boxShadow: 'inset 0 0.03vw 0 0 grey',
  },
}));

export default useStyles;
