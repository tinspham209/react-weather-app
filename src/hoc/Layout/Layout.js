import React, { useState } from "react";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
const Layout = props => {
  /*{
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };
  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };
  }*/
  return (
    <React.Fragment>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
