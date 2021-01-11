import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  textbox: {
    zIndex: 1,
    resize: 'none',
    direction: 'rtl',
    borderRadius: 10,
    padding: '2%',
    paddingBottom: '3%',
    fontSize: '1rem',
    fontFamily: theme.typography.fontFamily,
    outline: 'none',
    border: '0.1vw solid grey',
  },
  active: {
    border: `0.1vw solid ${theme.palette.primary.main}`,
  },
  iconsSection: {
    zIndex: 2,
    direction: 'rtl',
    display: 'flex',
  },
  icon: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
