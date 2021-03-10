import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  teamLogo: {
    height: '3em',
    width: '5em',
    marginLeft: '0.5%',
  },
  yesodotLogo: {
    height: '3em',
    width: '3.5em',
    marginLeft: '0.5%',
  },
  sapirLogo: {
    height: '3.5em',
    width: '3.5em',
  },
}));

export default useStyles;
