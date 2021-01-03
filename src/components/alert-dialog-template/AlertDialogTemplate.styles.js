import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  message: {
    fontFamily: config.style.fontFamily,
    direction: 'rtl',
    fontWeight: '600',
    fontSize: '1.2vw',
  },
  mainButton: {
    ...config.style.button,
    '&:hover': {
      backgroundColor: config.style.hoverColor,
      color: 'grey',
    },
  },
  secondaryButton: {
    ...config.style.button,
    backgroundColor: 'white',
    color: config.style.primaryColor,
    '&:hover': {
      backgroundColor: config.style.hoverColor,
      color: 'grey',
    },
  },
}));

export default useStyles;
