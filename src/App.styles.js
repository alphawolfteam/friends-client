import { makeStyles } from '@material-ui/core/styles';
import config from './appConf';

const useStyles = makeStyles(() => ({
  app: {
    backgroundColor: config.style.backgroundColor,
    height: 'calc(100vh - 16px)',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '5%',
    height: '100vh',
    width: '100vw',
  },
  poweredByText: {
    fontFamily: config.style.fontFamily,
    fontWeight: 500,
    marginTop: '5%',
    marginBottom: '3%',
  },
  poweredByDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  unitLogo: {
    width: '50%',
    height: '30%',
  },
}));

export default useStyles;
