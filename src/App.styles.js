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
    height: 'calc(100vh - 1em)',
    overflow: 'hidden',
  },
  page: {
    marginTop: '4em',
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '5%',
    height: '98vh',
    width: '99vw',
    backgroundColor: 'white',
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    marginTop: '4%',
    marginBottom: '2%',
  },
  friendsLogo: {
    width: '70vw',
    height: '80vh',
    animation: '$fade 2s ease-in alternate',
  },
  fadingEffect: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    background: 'white',
    animation: '$transition 2s ease-in alternate',
  },
  '@keyframes transition': {
    '0%': {
      width: '100%',
    },
    '50%': {
      width: '0%',
    },
    '100%': {
      width: '0%',
    },
  },
  '@keyframes fade': {
    '0%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

export default useStyles;
