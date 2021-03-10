import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  rolesSelect: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
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
    position: 'absolute',
    zIndex: theme.zIndex.snackbar + 1000,
  },
  buttonProgress: {
    position: 'absolute',
    color: theme.palette.primary.main,
  },
  selectProgress: {
    position: 'absolute',
    left: '40%',
    top: '25%',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
