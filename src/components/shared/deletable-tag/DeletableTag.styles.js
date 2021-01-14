import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  element: {
    position: 'relative',
  },
  label: {
    margin: '0.5%',
    paddingLeft: '5%',
    border: `0.1vw solid ${theme.palette.primary.main}`,
    backgroundColor: 'white',
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    fontSize: '1em',
    maxWidth: '15em',
    direction: 'rtl',
    whiteSpace: 'nowrap',
    '&:focus': {
      backgroundColor: 'white',
    },
  },
  closeIcon: {
    color: theme.palette.primary.main,
  },
  buttonProgress: {
    position: 'absolute',
    left: 0,
    top: '0.4em',
  },
}));

export default useStyles;
