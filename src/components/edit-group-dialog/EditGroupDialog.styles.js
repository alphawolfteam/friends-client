import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  lockIcon: {
    fontSize: '50vw',
  },
  button: config.style.button,
}));

export default useStyles;
