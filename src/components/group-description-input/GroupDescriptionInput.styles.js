import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    width: '90%',
    outline: 'none',
    border: '0.1vw solid grey',
    padding: '3%',
    borderRadius: 10,
    fontSize: '1vw',
    resize: 'none',
    fontFamily: config.style.fontFamily,
    '&:focus, &:hover': {
      border: `0.1vw solid ${config.style.mainColor}`,
    },
  },
}));

export default useStyles;
