import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1em',
  },
  scrollBar: {
    width: '90%',
    marginTop: '4em',
    height: '12.5em',
    overflow: 'auto',
  },
  field: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.2%',
    fontFamily: theme.typography.fontFamily,
  },
  message: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
    fontWeight: '600',
    textAlign: 'center',
    userSelect: 'none',
  },
}));

export default useStyles;
