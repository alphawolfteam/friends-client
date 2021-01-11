import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '2%',
    width: '80%',
    height: '19vh',
    overflow: 'overlay',
  },
  scrollBarContent: {
    paddingLeft: '1vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
  },
}));

export default useStyles;
