import { makeStyles } from '@material-ui/core/styles';
import config from '../../appConf';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  divider: {
    border: '0',
    clear: 'both',
    display: 'block',
    width: '90%',
    height: '0.01vh',
    backgroundColor: config.style.primaryColor,
  },
  optionsList: {
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '50%',
    minHeight: '50%',
  },
  optionCard: {
    width: '17em',
    minHeight: '3em',
    marginLeft: '3%',
    marginRight: '3%',
    marginBottom: '4%',
    background: 'none',
    boxShadow: 'none',
    direction: 'rtl',
    display: 'flex',
    wordBreak: 'break-all',
    '&:hover': {
      background: '#EEEEEE',
      boxShadow: 'none',
    },
  },
  optionContent: {
    fontWeight: '500',
    fontFamily: config.style.fontFamily,
    fontSize: '1em',
  },
}));

export default useStyles;
