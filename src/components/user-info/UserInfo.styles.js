import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
  },
  hover: {
    '&:hover': {
      backgroundColor: config.style.hoverColor,
    },
  },
  userName: {
    fontWeight: '700',
  },
  manager: {
    fontWeight: '500',
    fontSize: '0.8vw',
    paddingLeft: '1%',
  },
  hierarchyFlat: {
    fontFamily: config.style.fontFamily,
    fontSize: '1vw',
    wordBreak: 'break-all',
    boxShadow: 'inset 0 0.03vw 0 0 grey',
  },
}));

export default useStyles;
