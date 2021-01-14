import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
  },
  tagsList: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  label: {
    direction: 'rtl',
    margin: '1.3%',
    border: `0.1vw solid ${theme.palette.primary.main}`,
    underline: 'auto',
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    fontSize: '0.9rem',
    maxWidth: '10vw',
  },
  moreMessage: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    fontSize: '1vw',
  },
}));

export default useStyles;
