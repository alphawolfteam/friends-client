import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  message: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.4em',
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
    textAlign: 'center',
  },
}));

export default useStyles;
