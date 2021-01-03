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
    justifyContent: 'center',
    alignItems: 'center',
  },
  rolesSelect: {
    marginLeft: '0.5rem',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
    fontSize: '1.2rem',
    width: '70%',
    minWidth: '70%',
  },
  iconButton: {
    marginLeft: '15%',
    fontSize: '1.5rem',
    color: 'grey',
    '&:hover': {
      color: 'black',
    },
  },
  hierarchy: {
    fontFamily: config.style.fontFamily,
    fontSize: '1rem',
    fontWeight: '500',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
}));

export default useStyles;
