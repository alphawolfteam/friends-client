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
  addButton: {
    marginLeft: '7%',
    alignSelf: 'start',
    backgroundColor: config.style.mainColor,
    color: 'white',
    '&:hover': {
      color: config.style.mainColor,
    },
  },
}));

export default useStyles;
