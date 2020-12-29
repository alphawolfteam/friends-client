import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: '2%',
    marginBottom: '1%',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
  addButton: {
    ...config.style.button,
    backgroundColor: 'white',
    color: config.style.primaryColor,
    padding: '0.2%',
    fontSize: '0.9vw',
  },
}));

export default useStyles;
