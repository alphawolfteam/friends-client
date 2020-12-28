import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  message: {
    fontFamily: config.style.fontFamily,
    direction: 'rtl',
    fontWeight: '600',
  },
  button: config.style.button,
}));

export default useStyles;
