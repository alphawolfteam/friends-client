import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    width: '30%',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0 0.2vw 0.4vw, rgba(0, 0, 0, 0.23) 0 0.2vw 0.4vw',
    border: `0.1vw solid ${config.style.primaryColor}`,
  },
  divider: {
    marginLeft: '20%',
    background: config.style.primaryColor,
  },
  searchIcon: {
    color: config.style.primaryColor,
    background: 'none',
    boxShadow: 'none',
    width: '8%',
    height: '50%',
    marginLeft: '0.5em',
    '&:hover': {
      background: 'none',
      color: config.style.secondaryColor,
    },
  },
  input: {
    direction: 'rtl',
    padding: '0.7%',
    paddingRight: '3%',
    width: '100%',
    fontSize: '1rem',
    color: config.style.primaryColor,
    background: 'none',
    fontFamily: config.style.fontFamily,
    fontWeight: '600',
  },
}));

export default useStyles;
