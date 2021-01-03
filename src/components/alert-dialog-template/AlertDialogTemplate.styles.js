import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
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
