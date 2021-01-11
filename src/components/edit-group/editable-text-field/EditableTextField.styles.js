import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    direction: 'rtl',
    justifyContent: 'space-between',
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
    width: '100%',
    resize: 'none',
    direction: 'rtl',
    padding: '2%',
    paddingBottom: '3%',
    fontSize: '1rem',
    border: 'none',
    background: 'none',
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    outline: 'none',
  },
  iconsSection: {
    zIndex: 2,
    direction: 'ltr',
    display: 'flex',
    alignSelf: 'flex-end',
    paddingBottom: '0.25rem',
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
