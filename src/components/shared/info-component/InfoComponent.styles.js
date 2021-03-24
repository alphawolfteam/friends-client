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
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    direction: 'rtl',
    textAlign: 'center',
    fontSize: '1.15em',
    overflowWrap: 'break-word',
    margin: '1em 0',
  },
  message: {
    direction: 'rtl',
    textAlign: 'center',
    fontSize: '1.35em',
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  logo: {
    width: '18em',
    height: '7em',
  },
  divider: {
    margin: '0 1em',
    background: theme.palette.primary.main,
  },
  link: {
    direction: 'rtl',
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: 700,
    textDecoration: 'underline',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
