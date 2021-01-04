import React from 'react';
import './App.css';
import {
  createMuiTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core';

import SideMenu from 'components/SideMenu';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Employees from 'pages/Employees/Employees';

// bisa liat di dokumentasi customization/default-theme
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  shape: {
    // borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    // <></> itu sama dengan <React.Fragment></React.Fragment>
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xl={2} md={1} xs={false}>
          <SideMenu />
        </Grid>
        <Grid item xl={10} md={11} xs={12}>
          <Header />
          <Employees />
          <Footer />
        </Grid>
      </Grid>
      <CssBaseline /> {/* CssBaseline untuk set border-box & margin = 0 */}
    </ThemeProvider>
  );
}

export default App;
