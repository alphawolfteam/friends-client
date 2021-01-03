import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {},
  label: {
    margin: '0.5%',
    paddingLeft: '1.1%',
    border: `0.1vw solid ${config.style.primaryColor}`,
    backgroundColor: 'white',
    fontFamily: config.style.fontFamily,
    fontWeight: '700',
    fontSize: '1em',
    maxWidth: '15em',
    direction: 'rtl',
    whiteSpace: 'nowrap',
    '&:focus': {
      backgroundColor: 'white',
    },
  },
  closeIcon: {
    color: config.style.primaryColor,
  },
}));

export default useStyles;
