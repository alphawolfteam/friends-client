import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    margin: '1%',
    width: '80%',
    height: '50%',
    border: `0.1vw solid ${config.style.mainColor}`,
  },
  cardContent: {
    padding: '0.5%',
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: '0.5%',
    },
    '&:hover': {
      backgroundColor: config.style.mainColor,
      color: 'white',
      '& path': {
        color: 'white',
      },
    },
  },
  userName: {
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
    boxShadow: '0 0.1vw 0 0 grey',
  },
  hierarchyFlat: {
    fontFamily: config.style.fontFamily,
    wordBreak: 'break-all',
  },
}));

export default useStyles;
