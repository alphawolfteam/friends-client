import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    left: '0.2em',
    top: '0.2em',
    position: 'absolute',
  },
  icon: {
    fontSize: '1.8em',
    color: theme.palette.font.main,
    cursor: 'auto',
  },
}));

export default useStyles;
