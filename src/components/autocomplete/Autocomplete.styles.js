import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000,
    top: '14.5vh',
    borderRadius: 0,
  },
  optionCard: {
    width: '19vw',
    fontFamily: config.style.fontFamily,
    border: '1px solid grey',
    '&:hover': {
      backgroundColor: config.style.hoverColor,
    },
  },
  optionContent: {

  },
}));

export default useStyles;
