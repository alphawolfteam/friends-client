import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '80%',
    height: '19vh',
    overflow: 'overlay',
  },
  scrollBarContent: {
    padding: '3%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default useStyles;
