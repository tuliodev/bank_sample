import { ThemeProvider, createMuiTheme } from '@mui/material';
import React from 'react';
import Home from './pages/Home';

import './assets/styles/Global.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Oswald',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>

  );
}

export default App;
