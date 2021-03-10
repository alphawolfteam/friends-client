import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    direction: 'rtl',
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
}));

export default useStyles;
