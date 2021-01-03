import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    border: `0.1vw solid ${config.style.primaryColor}`,
    borderRadius: 30,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0 0.1vw 0.2vw, rgba(0, 0, 0, 0.23) 0 0.1vw 0.2vw',
  },
  searchBar: {
    background: 'none',
    padding: '2%',
    paddingRight: '3%',
    width: '15em',
    direction: 'rtl',
    fontSize: '0.9em',
    color: config.style.primaryColor,
    fontFamily: config.style.fontFamily,
    fontWeight: '600',
    position: 'relative',
  },
}));

export default useStyles;
