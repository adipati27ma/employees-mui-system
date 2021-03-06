import React from 'react';

import { makeStyles } from '@material-ui/core';

// using makeStyles ----------------
const useStyles = makeStyles({
  sideMenu: {
    // display: 'flex',
    // flexDirection: 'column',
    // position: 'absolute',
    // left: '0px',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    backgroundColor: '#253053',
  },
});

export default function SideMenu() {
  const classes = useStyles();

  return <div className={classes.sideMenu}></div>;
}

// using withStyles ------------------
// const style = {
//   sideMenu: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     left: "0px",
//     width: "320px",
//     height: "100%",
//     backgroundColor: "#253053",
//   },
// };

// const SideMenu = (props) => {
//   const { classes } = props;

//   return <div className={classes.sideMenu}></div>;
// };

// export default withStyles(style)(SideMenu);
