import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  message: {
    fontFamily: config.style.fontFamily,
    direction: 'rtl',
    fontWeight: '600',
    fontSize: '1.2vw',
  },
  button: config.style.button,
}));

export default useStyles;
