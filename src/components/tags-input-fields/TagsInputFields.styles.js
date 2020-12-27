import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tagsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  message: {
    fontFamily: config.style.fontFamily,
    color: config.style.primaryColor,
    fontWeight: '600',
    textAlign: 'center',
  },
}));

export default useStyles;
