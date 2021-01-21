import { createMuiTheme } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
  typography: {
    fontFamily: 'Alef',
  },
  palette: {
    primary: {
      main: '#2FB67C',
    },
    secondary: {
      main: '#C2EFDC',
    },
    background: {
      main: '#F9FAFB',
    },
    font: {
      main: '#56575D',
    },
    hover: {
      main: '#EEEEEE',
    },
  },
});

const theme = createMuiTheme({
  ...globalTheme,
  overrides: {
    MuiButton: {
      root: {
        direction: 'rtl',
        borderRadius: 30,
        fontFamily: globalTheme.typography.fontFamily,
        border: `0.1vw solid ${globalTheme.palette.primary.main}`,
        margin: '0.5%',
        fontSize: '0.8em',
        fontWeight: '700',
        background: globalTheme.palette.primary.main,
        color: 'white',
        '&:hover': {
          color: globalTheme.palette.primary.main,
          background: 'white',
        },
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 10,
        padding: '2%',
        fontSize: '1rem',
        fontFamily: globalTheme.typography.fontFamily,
        position: 'relative',
        outline: 'none',
      },
    },
    MuiTooltip: {
      tooltip: {
        direction: 'rtl',
        fontSize: '0.85rem',
      },
    },
  },
});

export default theme;
