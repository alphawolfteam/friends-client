import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import App from './App';
import './index.css';

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
    MuiSnackbar: {
      root: {
        bottom: '50%',
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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
