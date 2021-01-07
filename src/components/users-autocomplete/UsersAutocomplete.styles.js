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
    height: '0.05vh',
    backgroundColor: config.style.primaryColor,
  },
  optionsList: {
    overflowY: 'auto',
    overflowX: 'hidden',
    height: '50%',
    margin: '0.5em',
    minHeight: '50%',
  },
  optionCard: {
    width: '17rem',
    minHeight: '3em',
    paddingRight: '0.5em',
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
