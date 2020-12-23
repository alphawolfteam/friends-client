import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    color: config.style.primaryColor,
  },
}));

export default useStyles;
