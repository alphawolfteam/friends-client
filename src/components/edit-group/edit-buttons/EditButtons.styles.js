import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 2,
    direction: 'ltr',
    display: 'flex',
    alignSelf: 'flex-end',
    paddingBottom: '0.25rem',
    position: 'relative',
  },
  icon: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  progress: {
    position: 'absolute',
    left: '0.1em',
  },
}));

export default useStyles;
