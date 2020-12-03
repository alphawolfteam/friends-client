import React from 'react';
import AppBarComponent from './components/app-bar/app-bar';
import useStyles from "./App.styles";

const App = () => {
  const classes = useStyles();

  return (
    <AppBarComponent/>
  );
}

export default App;
