import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  message: {
    fontFamily: theme.typography.fontFamily,
    direction: 'rtl',
    fontWeight: '600',
    fontSize: '1.2vw',
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
