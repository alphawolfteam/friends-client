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
    margin: '1.3%',
    border: `0.1vw solid ${config.style.primaryColor}`,
    backgroundColor: 'white',
    color: config.style.primaryColor,
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
    fontSize: '1vw',
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
