import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2%',
  },
  scrollBar: {
    width: '90%',
    marginTop: '1.5em',
    height: '12em',
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
  inputArea: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0.2%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    color: theme.palette.primary.main,
    position: 'relative',
    marginRight: '.5rem',
    alignSelf: 'baseline',
  },
}));

export default useStyles;
