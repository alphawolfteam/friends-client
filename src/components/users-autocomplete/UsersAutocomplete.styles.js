import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: '10%',
    zIndex: 1,
  },
  optionsDiv: {
    position: 'absolute',
  },
  optionCard: {
    width: '19em',
    border: '0.08vw solid grey',
    borderRadius: 0,
    direction: 'rtl',
    display: 'flex',
    wordBreak: 'break-all',
    '&:hover': {
      background: '#EEEEEE',
    },
  },
  optionContent: {
    fontWeight: '500',
    fontFamily: config.style.fontFamily,
    fontSize: '1em',
  },
}));

export default useStyles;
