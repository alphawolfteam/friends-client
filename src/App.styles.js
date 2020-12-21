import { makeStyles } from '@material-ui/core/styles';
import config from './appConf';

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: config.style.backgroundColor,
    height: 'calc(100vh - 16px)',
  },
  loading: {
    display: 'flex',
    backgroundColor: config.style.backgroundColor,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '5%',
    height: '100vh',
    width: '100vw',
  },
  text: {
    fontFamily: config.style.fontFamily,
    fontWeight: 700,
    marginTop: '4%',
    marginBottom: '2%',
  },
  friendsLogo: {
    width: '40vw',
    height: '25vh',
  },
  unitLogo: {
    width: '30%',
    height: '20%',
  },
}));

export default useStyles;
