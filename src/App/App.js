import React from "react";
import "./App.css";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";

import SideMenu from "components/SideMenu";
import Header from "components/Header";

import Employees from "pages/Employees/Employees";

// bisa liat di dokumentasi customization/default-theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "120px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    // <></> itu sama dengan <React.Fragment></React.Fragment>
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline /> {/* CssBaseline untuk set border-box & margin = 0 */}
    </ThemeProvider>
  );
}

export default App;
