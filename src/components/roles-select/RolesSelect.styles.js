import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    width: '5rem',
    fontFamily: config.style.fontFamily,
    fontSize: '0.8rem',
    '&:before': {
      borderColor: 'grey',
    },
    '&:after': {
      borderColor: 'grey',
    },
  },
  item: {
    fontFamily: config.style.fontFamily,
    fontSize: '0.8rem',
  },
}));

export default useStyles;
