import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '3%',
    height: '3vh',
    width: '11em',
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
    fontSize: '1em',
    fontWeight: '600',
    width: '100%',
  },
  addIcon: {
    color: 'grey',
    fontSize: '1.3em',
    marginLeft: '5%',
    cursor: 'pointer',
    '&:hover': {
      color: config.style.primaryColor,
    },
  },
}));

export default useStyles;
