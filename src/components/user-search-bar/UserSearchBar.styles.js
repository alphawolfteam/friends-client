import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: config.style.mainColor,
    marginTop: '2%',
    width: '60%',
  },
  searchIcon: {
    color: 'white',
    backgroundColor: config.style.mainColor,
    boxShadow: 'none',
    width: '8%',
    height: '50%',
    marginLeft: '1%',
    '&:hover': {
      color: config.style.mainColor,
      backgroundColor: 'white',
    },
  },
  input: {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '0.7vw',
    color: 'white',
    fontFamily: config.style.fontFamily,
    fontWeight: '500',
  },
}));

export default useStyles;
