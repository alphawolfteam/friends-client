import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: '3em',
    width: '100%',
  },
  actions: {
    flex: '1 0 0',
  },
  speedDialActions: {
    position: 'absolute',
    direction: 'rtl',
    zIndex: theme.zIndex.snackbar + 1,
    bottom: 0,
    left: 0,
  },
  icon: {
    marginRight: '0.3em',
  },
}));

export default useStyles;
