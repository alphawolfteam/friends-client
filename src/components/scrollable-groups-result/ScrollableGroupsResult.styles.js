import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1%',
    width: '65vw',
    height: '65vh',
    background: config.style.backgroundColor,
    borderRadius: 10,
  },
  scrollBarContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    color: config.style.fontColor,
    fontSize: '3em',
    borderRadius: '50%',
    '&:hover': {
      color: config.style.primaryColor,
    },
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
  },
  startMessage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    direction: 'rtl',
    marginTop: '5em',
    fontFamily: config.style.fontFamily,
    fontSize: '1.5vw',
    fontWeight: '600',
    color: config.style.fontColor,
  },
  message: {
    direction: 'rtl',
    marginTop: '2%',
    fontFamily: config.style.fontFamily,
    fontSize: '1.5vw',
    textAlign: 'center',
    fontWeight: '600',
    color: config.style.fontColor,
  },
}));

export default useStyles;
