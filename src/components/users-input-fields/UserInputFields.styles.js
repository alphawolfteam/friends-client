import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  fieldList: {
    width: '30vw',
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    display: 'flex',
    jusifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: config.style.fontFamily,
  },
  iconButton: {
    color: config.style.mainColor,
    width: '3vw',
    height: '3vh',
  },
  textBox: {
    width: '100%',
    backgroundColor: config.style.backgroundColor,
    marginBottom: '4%',
    borderRadius: theme.shape.borderRadius,
    '&:before': {
      borderBottom: '1.2px solid grey',
    },
    '&:after': {
      borderBottom: `2px solid ${config.style.mainColor}`,
    },
  },
}));

export default useStyles;
