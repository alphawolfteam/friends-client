import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: config.style.mainColor,
    marginTop: '2%',
    width: '30%',
  },
  searchIcon: {
    color: 'white',
    backgroundColor: config.style.mainColor,
    boxShadow: 'none',
    width: '8%',
    height: '50%',
    marginLeft: '1%',
    '&:hover': {
      backgroundColor: config.style.secondaryColor,
      color: config.style.mainColor,
    },
  },
  input: {
    padding: '2%',
    width: '100%',
    fontSize: '1.1vw',
    color: 'white',
    fontFamily: config.style.fontFamily,
    fontWeight: '600',
  },
}));

export default useStyles;
