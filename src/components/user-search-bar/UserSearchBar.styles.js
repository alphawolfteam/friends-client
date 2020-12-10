import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchBar: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: config.style.mainColor,
    padding: theme.spacing(1, 1, 1, 0),
    width: '19vw',
    fontSize: '0.7vw',
    color: 'white',
    fontFamily: config.style.fontFamily,
    fontWeight: '500',
    position: 'relative',
  },
}));

export default useStyles;
