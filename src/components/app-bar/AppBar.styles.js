import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    width: '15em',
    height: '4em',
    paddingRight: '1%',
  },
  username: {
    color: config.style.fontColor,
    fontFamily: config.style.fontFamily,
    fontSize: '1.3rem',
    fontWeight: '500',
  },
}));

export default useStyles;
