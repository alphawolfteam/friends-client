import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%',
  },
  tagsList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  label: {
    direction: 'rtl',
    margin: '1.3%',
    border: `0.1vw solid ${config.style.primaryColor}`,
    underline: 'auto',
    backgroundColor: 'white',
    color: config.style.primaryColor,
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
    fontSize: '0.9rem',
    maxWidth: '10vw',
  },
  moreMessage: {
    color: config.style.primaryColor,
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
    fontSize: '1vw',
  },
}));

export default useStyles;
