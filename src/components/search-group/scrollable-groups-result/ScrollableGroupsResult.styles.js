import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1%',
    width: 'calc(100vw - 1em)',
    height: '80vh',
    background: theme.palette.background.main,
    borderRadius: 10,
    overflow: 'auto',
    transform: 'translateX(0)',
  },
  scrollBarContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: theme.palette.font.main,
    fontSize: '3em',
    borderRadius: '50%',
    '&:hover': {
      color: theme.palette.primary.main,
    },
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
    userSelect: 'none',
  },
  message: {
    direction: 'rtl',
    marginTop: '2%',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1.5vw',
    textAlign: 'center',
    fontWeight: '600',
    color: theme.palette.font.main,
    userSelect: 'none',
  },
}));

export default useStyles;
