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
  message: {
    direction: 'rtl',
    marginTop: '2%',
    fontFamily: config.style.fontFamily,
    fontSize: '1.5vw',
    textAlign: 'center',
    fontWeight: '600',
    color: config.style.primaryColor,
  },
}));

export default useStyles;
