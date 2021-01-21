import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginRight: '1%',
  },
  lockIcon: {
    background: 'none',
    boxShadow: 'none',
    zIndex: 2,
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
