import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      background: theme.palette.secondary.main,

      'border-radius': '50em',
    },
    '*::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
      'border-radius': '50em',
    },
    'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 30vw white inset !important',
    },
  },
  app: {
    backgroundColor: theme.palette.background.main,
    height: 'calc(100vh - 4.5em)',
  },
  page: {
    marginTop: '4em',
  },
  loading: {
    display: 'flex',
    backgroundColor: theme.palette.background.main,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '5%',
    height: '98vh',
    width: '99vw',
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    marginTop: '4%',
    marginBottom: '2%',
  },
  friendsLogo: {
    width: '40vw',
    height: '25vh',
  },
  unitLogo: {
    width: '30%',
    height: '20%',
  },
}));

export default useStyles;
