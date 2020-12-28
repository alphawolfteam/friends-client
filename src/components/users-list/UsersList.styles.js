import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    width: '80%',
    height: '19vh',
    overflow: 'overlay',
  },
  scrollBarContent: {
    padding: '3%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  message: {
    fontFamily: config.style.fontFamily,
    color: config.style.primaryColor,
    fontWeight: '600',
  },
}));

export default useStyles;
