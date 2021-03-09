import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '3em',
    height: '3em',
  },
}));

export default useStyles;
