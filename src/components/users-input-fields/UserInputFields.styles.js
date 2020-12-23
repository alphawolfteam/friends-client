import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  scrollBar: {
    width: '90%',
    height: '20vh',
  },
  fieldsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5%',
    fontFamily: config.style.fontFamily,
  },
  iconButton: {
    color: config.style.primaryColor,
    width: '3vw',
    height: '3vh',
    '&:hover': {
      background: 'white',
    },
  },
  message: {
    fontFamily: config.style.fontFamily,
    color: config.style.primaryColor,
    fontWeight: '600',
    textAlign: 'center',
  },
}));

export default useStyles;
