import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  actions: {
    flex: '1 0 0',
  },
  fab: {
    color: theme.palette.font.main,
    background: 'none',
    boxShadow: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    fontSize: '2em',
  },
}));

export default useStyles;
