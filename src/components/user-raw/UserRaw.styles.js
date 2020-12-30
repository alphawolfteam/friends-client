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
    display: 'flex',
    flexDirection: 'column',
    direction: 'rtl',
    padding: '0.5%',
    '&:last-child': {
      paddingBottom: '0.5%',
    },
  },
  hierarchyFlat: {
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
    wordBreak: 'break-all',
    boxShadow: 'inset 0 0.03vw 0 0 grey',
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: config.style.fontFamily,
    width: '100%',
    fontSize: '1vw',
  },
  userName: {
    fontWeight: '700',
  },
  iconButton: {
    minWidth: 0,
    height: '3vh',
    '&:hover': {
      background: 'none',
    },
  },
  role: {
    fontWeight: '500',
    fontSize: '0.8vw',
    paddingLeft: '1%',
  },
}));

export default useStyles;
