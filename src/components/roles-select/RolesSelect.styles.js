import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    width: '5vw',
    fontFamily: config.style.fontFamily,
    fontSize: '0.8vw',
    '&:before': {
      borderColor: 'grey',
    },
    '&:after': {
      borderColor: 'grey',
    },
  },
  item: {
    fontFamily: config.style.fontFamily,
    fontSize: '0.8vw',
  },
}));

export default useStyles;
