import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.3em',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '3%',
  },
  fieldsList: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2%',
    marginRight: '2%',
  },
  field: {
    width: '15em',
    fontSize: '1em',
  },
}));

export default useStyles;
