import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    marginTop: '2%',
  },
  icon: {
    fontSize: '2rem',
  },
}));

export default useStyles;
