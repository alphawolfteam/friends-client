import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    boxShadow: '0 0.2vw 0.3vw 0 grey',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    width: '15em',
    height: '4em',
    paddingRight: '1%',
  },
  username: {
    color: theme.palette.font.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: '1.3rem',
    fontWeight: '500',
  },
}));

export default useStyles;
