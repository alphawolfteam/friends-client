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
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: config.style.fontFamily,
    width: '100%',
  },
  info: {
    fontWeight: '700',
    width: '70%',
    minWidth: '70%',
    fontSize: '1.2rem',
  },
  hierarchy: {
    fontFamily: config.style.fontFamily,
    fontSize: '1rem',
    fontWeight: '500',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  role: {
    fontWeight: '500',
    fontSize: '0.8rem',
    paddingLeft: '1%',
  },
}));

export default useStyles;
