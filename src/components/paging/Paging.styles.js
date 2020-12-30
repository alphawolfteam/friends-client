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
    marginTop: '5%',
    minHeight: '70%',
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
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
    width: '2vw',
    fontSize: '2vw',
  },
  disabledArrowIcon: {
    color: 'lightgrey',
    width: '2vw',
    fontSize: '2vw',
  },
}));

export default useStyles;
