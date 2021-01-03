import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    width: '50vw',
    alignSelf: 'center',
  },
  divider: {
    backgroundColor: config.style.primaryColor,
    marginBottom: '1%',
  },
  dividerText: {
    fontFamily: config.style.fontFamily,
    fontWeight: '600',
    fontSize: '1.2rem',
    direction: 'rtl',
    textAlign: 'center',
    color: config.style.primaryColor,
  },
}));

export default useStyles;
