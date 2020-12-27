import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    width: '5vw',
    fontFamily: config.style.fontFamily,
    '&:before': {
      borderColor: 'grey',
    },
    '&:after': {
      borderColor: 'grey',
    },
  },
  item: {
    fontFamily: config.style.fontFamily,
  },
}));

export default useStyles;
