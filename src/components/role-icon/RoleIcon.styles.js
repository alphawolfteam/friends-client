import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  icon: {
    left: '0.2em',
    top: '0.2em',
    position: 'absolute',
    fontSize: '1.5em',
    color: config.style.fontColor,
    cursor: 'auto',
    // display: 'inline-block',
  },
}));

export default useStyles;
