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
    width: '19vw',
    borderRadius: 0,
    border: '0.08vw solid grey',
    '&:hover': {
      backgroundColor: config.style.hoverColor,
    },
  },
  optionContent: {
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
    direction: 'rtl',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    paddingLeft: '1%',
  },
}));

export default useStyles;
