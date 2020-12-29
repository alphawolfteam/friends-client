import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    ...config.style.input,
    zIndex: 1,
    direction: 'rtl',
  },
}));

export default useStyles;
