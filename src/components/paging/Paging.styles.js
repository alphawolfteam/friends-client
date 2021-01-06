import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    minHeight: '100%',
  },
  page: {
    position: 'relative',
    minHeight: '75%',
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    overflow: 'auto',
    overflowX: 'hidden',
  },
  buttonSection: {
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
  },
  arrowIcon: {
    color: 'black',
    width: '1em',
    fontSize: '2em',
    cursor: 'pointer',
  },
  disabledArrowIcon: {
    color: 'lightgrey',
    width: '1em',
    fontSize: '2em',
  },
}));

export default useStyles;
