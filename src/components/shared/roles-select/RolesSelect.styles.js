import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '5rem',
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.8rem',
    '&:before': {
      borderColor: 'grey',
    },
    '&:after': {
      borderColor: 'grey',
    },
  },
  item: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '0.8rem',
  },
}));

export default useStyles;
