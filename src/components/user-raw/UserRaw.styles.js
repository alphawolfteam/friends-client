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
  userName: {
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
    boxShadow: '0 0.1vw 0 0 grey',
    '&:hover': {
      backgroundColor: config.style.hoverColor,
    },
  },
  hierarchyFlat: {
    fontFamily: config.style.fontFamily,
    wordBreak: 'break-all',
  },
}));

export default useStyles;
