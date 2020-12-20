import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  scrollBar: {
    width: '30vw',
    height: '20vh',
    marginRight: '5%',
  },
  fieldsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    display: 'flex',
    jusifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: config.style.fontFamily,
  },
  iconButton: {
    color: config.style.mainColor,
    width: '3vw',
    height: '3vh',
    '&:hover': {
      background: 'white',
    },
  },
  message: {
    fontFamily: config.style.fontFamily,
    color: config.style.mainColor,
    fontWeight: '500',
    textAlign: 'center',
  },
}));

export default useStyles;
