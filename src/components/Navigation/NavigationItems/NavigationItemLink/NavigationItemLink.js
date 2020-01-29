import React from "react";

import classes from "./NavigationItemLink.css";

const navigationItemLink = props => (
  <li className={classes.NavigationItemLink}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItemLink;
