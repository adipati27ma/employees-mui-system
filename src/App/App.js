import "./App.css";
import SideMenu from "../components/SideMenu";
import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    // <></> itu sama dengan <React.Fragment></React.Fragment>
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline /> {/* CssBaseline untuk set border-box & margin = 0 */}
    </>
  );
}

export default App;
