import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    fontWeight: '700',
    width: '70%',
    minWidth: '70%',
    fontFamily: config.style.fontFamily,
    fontSize: '1.2rem',
  },
  hierarchy: {
    fontFamily: config.style.fontFamily,
    fontSize: '1rem',
    fontWeight: '500',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
}));

export default useStyles;
