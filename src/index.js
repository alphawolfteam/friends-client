import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import theme from './theme';
import App from './App';
import './index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider maxSnack={3} preventDuplicate>
      <App />
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
