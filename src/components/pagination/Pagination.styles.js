import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '2%',
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
  },
  circle: {
    width: '0.8em',
    height: '0.8em',
    border: `0.1vw solid ${config.style.primaryColor}`,
    borderRadius: '100%',
    margin: '3%',
    boxShadow: '0 0.1vw 0.1vw 0 grey',
  },
  selected: {
    background: config.style.primaryColor,
  },
}));

export default useStyles;
