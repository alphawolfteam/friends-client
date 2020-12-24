import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: config.style.fontFamily,
  },
  item: {
    fontFamily: config.style.fontFamily,
  },
}));

export default useStyles;
