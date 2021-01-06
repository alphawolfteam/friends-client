import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '95%',
    minHeight: '95%',
  },
  page: {
    position: 'relative',
    marginBottom: '5%',
    minHeight: '75%',
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    overflow: 'auto',
    overflowX: 'hidden',
  },
  buttonSection: {
    marginTop: '3%',
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
