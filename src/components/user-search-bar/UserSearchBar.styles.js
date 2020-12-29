import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  searchBar: {
    borderRadius: 30,
    backgroundColor: config.style.primaryColor,
    paddingRight: '3%',
    width: '19vw',
    direction: 'rtl',
    fontSize: '0.9vw',
    color: 'white',
    fontFamily: config.style.fontFamily,
    fontWeight: '600',
    position: 'relative',
  },
}));

export default useStyles;
