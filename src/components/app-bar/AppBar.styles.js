import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    boxShadow: `0 0.2vw 0.3vw 0 ${config.style.mainColor}`,
  },
  logo: {
    width: '20%',
    height: '15%',
    paddingRight: '1%',
    paddingBottom: '0.5%',
  },
  username: {
    color: config.style.mainColor,
    fontFamily: config.style.fontFamily,
    flexGrow: 1,
    fontSize: '1.5vw',
  },
}));

export default useStyles;
