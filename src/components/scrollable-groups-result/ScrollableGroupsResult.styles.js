import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1%',
    width: '60vw',
    height: '65vh',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    borderRadius: 20,
  },
  scrollBarContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  message: {
    marginTop: '2%',
    fontFamily: config.style.fontFamily,
    fontSize: '1.5vw',
    textAlign: 'center',
    fontWeight: '500',
    color: config.style.mainColor,
  },
}));

export default useStyles;
