import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: '700',
    width: '70%',
    minWidth: '70%',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1.2rem',
  },
  hierarchy: {
    fontFamily: theme.typography.fontFamily,
    fontSize: '1rem',
    fontWeight: '500',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
}));

export default useStyles;
