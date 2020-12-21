import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1%',
    width: '80%',
    height: '50%',
  },
  cardContent: {
    padding: '0.5%',
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: '0.5%',
    },
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: config.style.fontFamily,
    boxShadow: '0 0.1vw 0 0 grey',
    fontSize: '1vw',
    '&:hover': {
      backgroundColor: config.style.hoverColor,
    },
  },
  userName: {
    fontWeight: '700',
  },
  manager: {
    fontWeight: '500',
    fontSize: '0.8vw',
    paddingLeft: '1%',
  },
  hierarchyFlat: {
    fontFamily: config.style.fontFamily,
    wordBreak: 'break-all',
  },
}));

export default useStyles;
