import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: 'absolute',
    top: '4rem',
    right: '1rem',
  },
  icon: {
    width: '1.5em',
    height: '1.5em',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    direction: 'rtl',
    textAlign: 'center',
    fontSize: '1.25em',
    fontWeight: 600,
  },
  message: {
    direction: 'rtl',
    textAlign: 'center',
    fontSize: '1.5em',
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  logo: {
    width: '17em',
    height: '5em',
  },
}));

export default useStyles;
