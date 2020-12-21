import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tagsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  message: {
    fontFamily: config.style.fontFamily,
    color: config.style.mainColor,
    fontWeight: '600',
    textAlign: 'center',
  },
}));

export default useStyles;
