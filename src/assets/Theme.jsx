import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#046d32',
      light: '#e2ffc596',
      dark: '#045828',
    },
    secondary: {
      main: '#ff5700',
      light: '#ee925c',
      dark: '#f38038',
    },
  },
});

export default function Theme({ children }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}
