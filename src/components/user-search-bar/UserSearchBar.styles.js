import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: config.style.mainColor,
    marginBottom: '2%',
    width: '60%',
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '0.7vw',
    color: 'white',
    fontFamily: config.style.fontFamily,
    fontWeight: '500',
    position: 'relative',
  },
}));

export default useStyles;
