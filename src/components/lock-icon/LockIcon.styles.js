import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    color: config.style.primaryColor,
    marginTop: '7%',
  },
  icon: {
    fontSize: '2rem',
  },
}));

export default useStyles;
