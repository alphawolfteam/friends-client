import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
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
  searchIcon: {
    color: theme.palette.primary.main,
    background: 'none',
    boxShadow: 'none',
    width: '8%',
    height: '50%',
    marginLeft: '0.5em',
    '&:hover': {
      background: 'none',
      color: theme.palette.secondary.main,
    },
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
