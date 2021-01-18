import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    minHeight: '100%',
  },
  page: {
    position: 'relative',
    minHeight: '80%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    overflow: 'auto',
    overflowX: 'hidden',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
  },
  stepper: {
    background: 'none',
    marginTop: '1%',
    width: '60%',
  },
}));

export default useStyles;
