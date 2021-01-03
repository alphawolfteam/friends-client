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
    borderRadius: 0,
  },
  optionsDiv: {
    position: 'absolute',
  },
  optionCard: {
    width: '19em',
    borderRadius: 0,
    border: '0.08vw solid grey',
    direction: 'rtl',
    display: 'flex',
    wordBreak: 'break-all',
  },
  optionContent: {
    fontWeight: '500',
    fontFamily: config.style.fontFamily,
    fontSize: '1em',
  },
  icon: {
    paddingLeft: '1%',
    '&:hover': {
      color: 'lightgrey',
    },
  },
}));

export default useStyles;
