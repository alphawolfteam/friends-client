import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3%',
  },
  titleIcon: {
    marginLeft: '5%',
    fontSize: '1.7rem',
  },
  title: {
    fontSize: '1.2rem',
    direction: 'rtl',
    display: 'flex',
    alignSelf: 'flex-end',
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    userSelect: 'none',
  },
  groupDescription: {
    maxHeight: '8vh',
    direction: 'rtl',
    width: '95%',
    maxWidth: '95%',
    overflowY: 'auto',
    overflowX: 'hidden',
    fontSize: '1rem',
    fontFamily: theme.typography.fontFamily,
  },
  divider: {
    border: '0',
    clear: 'both',
    display: 'block',
    width: '96%',
    backgroundColor: 'lightgrey',
    height: '0.1vh',
  },
}));

export default useStyles;
