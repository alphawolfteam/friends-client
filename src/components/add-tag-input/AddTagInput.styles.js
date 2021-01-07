import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '3%',
    height: '3vh',
    width: '11em',
    border: '0.1vw solid grey',
    borderRadius: 30,
    '&:focus, &:hover': {
      border: `0.1vw solid ${theme.palette.primary.main}`,
    },
    marginBottom: '3%',
  },
  input: {
    direction: 'rtl',
    fontFamily: theme.typography.fontFamily,
    paddingRight: '2%',
    fontSize: '1em',
    fontWeight: '600',
    width: '100%',
  },
  addIcon: {
    color: 'grey',
    fontSize: '1.3em',
    marginLeft: '5%',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
