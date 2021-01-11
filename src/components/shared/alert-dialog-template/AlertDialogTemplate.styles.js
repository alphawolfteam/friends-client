import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  mainButton: {
    '&:hover': {
      backgroundColor: theme.palette.hover.main,
      color: 'grey',
    },
  },
  secondaryButton: {
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.hover.main,
      color: 'grey',
    },
  },
}));

export default useStyles;
