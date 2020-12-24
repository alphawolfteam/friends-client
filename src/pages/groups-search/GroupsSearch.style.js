import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
  icon: {
    height: '1.5em',
    width: '1.5em',
  },
  addButton: {
    ...config.style.button,
    marginLeft: '7%',
    alignSelf: 'start',
  },
}));

export default useStyles;
