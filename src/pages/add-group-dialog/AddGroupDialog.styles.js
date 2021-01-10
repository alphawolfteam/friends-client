import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '6.5rem',
    width: '100%',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    zIndex: theme.zIndex.snackbar + 1,
    color: '#fff',
  },
}));

export default useStyles;
