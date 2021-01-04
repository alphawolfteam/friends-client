import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    left: '0em',
    top: '0em',
    position: 'absolute',
    height: '50%',
    borderRight: `0.1em solid ${config.style.primaryColor}`,
    transform: 'skew(-45deg)',
  },
  icon: {
    right: '0.4em',
    top: '0.1em',
    position: 'relative',
    fontSize: '1.5em',
    color: config.style.fontColor,
    cursor: 'auto',
    transform: 'skew(45deg)',
  },
}));

export default useStyles;
