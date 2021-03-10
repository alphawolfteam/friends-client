import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50vw',
    alignSelf: 'center',
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: '1%',
  },
  dividerText: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '600',
    fontSize: '1.2rem',
    direction: 'rtl',
    textAlign: 'center',
    color: theme.palette.primary.main,
    userSelect: 'none',
  },
}));

export default useStyles;
