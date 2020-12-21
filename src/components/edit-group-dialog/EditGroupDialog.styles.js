import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  titleIcon: {
    marginLeft: '5%',
  },
  title: {
    display: 'flex',
    paddingRight: '2%',
    alignSelf: 'flex-end',
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
  },
  lock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '1%',
  },
  button: config.style.button,
}));

export default useStyles;
