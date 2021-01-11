import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '1%',
    position: 'relative',
  },
  lockIcon: {
    background: 'none',
    boxShadow: 'none',
    '&:hover': {
      background: 'none',
      boxShadow: 'none',
    },
  },
  fabProgress: {
    position: 'absolute',
  },
}));

export default useStyles;
