import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {},
  label: {
    margin: '0.5%',
    border: `0.1vw solid ${config.style.mainColor}`,
    backgroundColor: 'white',
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
    fontSize: '1vw',
    maxWidth: '30vw',
    whiteSpace: 'nowrap',
  },
  closeIcon: {
    color: config.style.mainColor,
    marginLeft: '1%',
  },
}));

export default useStyles;
