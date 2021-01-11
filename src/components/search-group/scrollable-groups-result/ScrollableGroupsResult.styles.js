import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1%',
    width: '65vw',
    height: '65vh',
    background: theme.palette.background.main,
    borderRadius: 10,
    overflow: 'auto',
    transform: 'translateX(0)',
  },
  scrollBarContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    color: theme.palette.font.main,
    fontSize: '3em',
    borderRadius: '50%',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
  },
  startMessage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    direction: 'rtl',
    marginTop: '5em',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1.5vw',
    fontWeight: '600',
    color: theme.palette.font.main,
  },
  message: {
    direction: 'rtl',
    marginTop: '2%',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1.5vw',
    textAlign: 'center',
    fontWeight: '600',
    color: theme.palette.font.main,
  },
}));

export default useStyles;
