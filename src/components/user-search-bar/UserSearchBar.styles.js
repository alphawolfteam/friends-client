import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchBar: {
    borderRadius: 30,
    backgroundColor: config.style.mainColor,
    padding: '2%',
    width: '19vw',
    fontSize: '1vw',
    color: 'white',
    fontFamily: config.style.fontFamily,
    fontWeight: '500',
    position: 'relative',
  },
}));

export default useStyles;
