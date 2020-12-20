import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
  },
  logo: {
    width: '20%',
    height: '15%',
    paddingRight: '1%',
    paddingBottom: '0.5%',
  },
  username: {
    color: config.style.fontColor,
    fontFamily: config.style.fontFamily,
    flexGrow: 1,
    fontSize: '1.3vw',
  },
}));

export default useStyles;
