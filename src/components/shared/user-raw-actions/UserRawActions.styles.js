import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rolesSelect: {
    marginLeft: '0.5rem',
    position: 'relative',
  },
  iconButton: {
    marginLeft: '15%',
    fontSize: '1.5rem',
    color: 'grey',
    cursor: 'pointer',
    '&:hover': {
      color: 'black',
    },
    position: 'relative',
  },
  backdrop: {
    background: 'none',
    width: '5em',
    height: '2em',
    position: 'absolute',
    zIndex: theme.zIndex.snackbar + 1,
  },
  buttonProgress: {
    position: 'absolute',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
