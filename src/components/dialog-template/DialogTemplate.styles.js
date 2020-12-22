import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
  },
  dialogTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: theme.spacing(15),
    marginLeft: theme.spacing(15),
    fontFamily: config.style.fontFamily,
    fontWeight: '600',
    fontSize: '2vw',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: config.style.mainColor,
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
