import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
  },
  dialogTitle: {
    direction: 'rtl',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: theme.spacing(15),
    marginLeft: theme.spacing(15),
    fontFamily: config.style.fontFamily,
    fontWeight: '600',
    fontSize: '2vw',
  },
  dialogContent: {
    margin: '1%',
    overflowX: 'hidden',
    height: '22em',
  },
  dialogActions: {
    margin: 0,
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
