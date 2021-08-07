import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignSelf: 'center',
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: '1',
    top: 0,
    backgroundColor: theme.palette.background.main,
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: '1%',
    width: '50vw',
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
