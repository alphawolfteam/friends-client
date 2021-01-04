import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    left: '0em',
    top: '0em',
    position: 'absolute',
    minWidth: '1.8em',
    width: '1.8em',
    height: '50%',
    borderRight: `0.15em solid ${config.style.primaryColor}`,
    boxShadow: '0.2vw 0 0.2vw -0.15vw grey',
    transform: 'skew(-45deg)',
  },
  icon: {
    right: '0.45em',
    top: '0.1em',
    position: 'relative',
    fontSize: '1.5em',
    color: config.style.fontColor,
    cursor: 'auto',
    transform: 'skew(45deg)',
  },
}));

export default useStyles;
