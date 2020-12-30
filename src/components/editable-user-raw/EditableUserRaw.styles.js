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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    fontWeight: '700',
    width: '70%',
    minWidth: '70%',
  },
  iconButton: {
    marginLeft: '15%',
  },
  hierarchy: {
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
    fontWeight: '500',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
}));

export default useStyles;
