import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
  },
  fieldList: {
    width: '30vw',
    height: '20vh',
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
}));

export default useStyles;
