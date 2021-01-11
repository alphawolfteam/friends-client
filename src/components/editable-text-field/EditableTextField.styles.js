import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    border: '0.1vw solid grey',
    borderRadius: 10,
    background: '#FAFAFA',
  },
  active: {
    border: `0.1vw solid ${theme.palette.primary.main}`,
    background: 'white',
  },
  textbox: {
    zIndex: 1,
    resize: 'none',
    direction: 'rtl',
    padding: '2%',
    paddingBottom: '3%',
    fontSize: '1rem',
    border: 'none',
    background: 'none',
    fontFamily: theme.typography.fontFamily,
    outline: 'none',
  },
  iconsSection: {
    zIndex: 2,
    direction: 'ltr',
    display: 'flex',
  },
  icon: {
    width: '1em',
    height: '1em',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  fabProgress: {
    position: 'absolute',
  },
}));

export default useStyles;
