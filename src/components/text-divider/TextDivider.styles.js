import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    width: '50vw',
    alignSelf: 'center',
  },
  divider: {
    backgroundColor: config.style.mainColor,
    marginBottom: '1%',
  },
  dividerText: {
    fontFamily: config.style.fontFamily,
    fontWeight: '600',
    color: config.style.mainColor,
  },
}));

export default useStyles;
