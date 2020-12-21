import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    width: '27vw',
    height: '19vh',
  },
  scrollBarContent: {
    margin: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  message: {
    fontFamily: config.style.fontFamily,
    color: config.style.mainColor,
    fontWeight: '500',
  },
}));

export default useStyles;
