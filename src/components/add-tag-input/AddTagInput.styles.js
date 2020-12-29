import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '3vh',
    width: '11vw',
    border: '0.1vw solid grey',
    borderRadius: 30,
    '&:focus, &:hover': {
      border: `0.1vw solid ${config.style.primaryColor}`,
    },
    marginBottom: '3%',
  },
  input: {
    direction: 'rtl',
    fontFamily: config.style.fontFamily,
    paddingRight: '2%',
    fontSize: '1vw',
    fontWeight: '600',
    width: '100%',
  },
  addIcon: {
    color: 'grey',
    fontSize: '1.3vw',
    marginLeft: '5%',
    '&:hover': {
      color: config.style.primaryColor,
    },
  },
}));

export default useStyles;
