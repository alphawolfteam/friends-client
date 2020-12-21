import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflowX: 'hidden',
  },
  dialogTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  titleIcon: {
    marginLeft: '5%',
    fontSize: '1.5vw',
  },
  title: {
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
  groupIcon: {
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: 'white',
    width: '4em',
    height: '4em',
    overflow: 'hidden',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
    marginLeft: '5%',
    marginBottom: '2%',
  },
}));

export default useStyles;
