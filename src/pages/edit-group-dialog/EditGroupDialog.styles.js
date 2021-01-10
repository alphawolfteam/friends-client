import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '6.5rem',
    width: '100%',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default useStyles;
