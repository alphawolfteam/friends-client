import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  pagination: {
    marginBottom: '3%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
  },
  buttonSection: {
    width: '20%',
  },
  button: config.style.button,
}));

export default useStyles;
