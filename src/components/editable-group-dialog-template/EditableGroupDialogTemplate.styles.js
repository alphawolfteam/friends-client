import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {},
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '7%',
    marginRight: '20%',
    width: '100%',
  },
  titleIcon: {
    marginLeft: '5%',
    fontSize: '1.5vw',
  },
  title: {
    direction: 'rtl',
    fontSize: '1vw',
    display: 'flex',
    paddingRight: '2%',
    alignSelf: 'flex-end',
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
  },
  lock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '1%',
  },
  lockIcon: {
    background: 'none',
    boxShadow: 'none',
    '&:hover': {
      background: 'none',
      boxShadow: 'none',
    },
  },
}));

export default useStyles;
