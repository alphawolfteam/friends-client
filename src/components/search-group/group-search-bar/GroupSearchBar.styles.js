import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    width: '30%',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0 0.2vw 0.4vw, rgba(0, 0, 0, 0.23) 0 0.2vw 0.4vw',
    border: `0.1vw solid ${theme.palette.primary.main}`,
  },
  divider: {
    marginLeft: '20%',
    background: theme.palette.primary.main,
  },
  icon: {
    color: theme.palette.primary.main,
    background: 'none',
    boxShadow: 'none',
    paddingLeft: '0.5em',
    width: '8%',
    height: '50%',
    '&:focus,&:hover': {
      background: 'none',
      boxShadow: 'none',
      color: theme.palette.secondary.main,
    },
  },
  clearIcon: {
    position: 'absolute',
    zIndex: 2,
    left: '2.5em',
  },
  input: {
    direction: 'rtl',
    padding: '0.7%',
    paddingRight: '3%',
    width: '100%',
    fontSize: '1rem',
    color: theme.palette.primary.main,
    background: 'none',
    fontFamily: theme.typography.fontFamily,
    fontWeight: '600',
  },
}));

export default useStyles;
