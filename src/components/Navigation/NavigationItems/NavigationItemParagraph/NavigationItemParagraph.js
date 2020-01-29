import React from "react";

import classes from "./NavigationItemParagraph.css";

const navigationItemParagraph = props => (
  <li className={classes.NavigationItemParagraph}>
    <p>{props.children}</p>
  </li>
);

export default navigationItemParagraph;
