import React from "react";
import classes from "./NavigationItems.css";

import NavigationItemLink from "./NavigationItemLink/NavigationItemLink";
import NavigationItemParagraph from "./NavigationItemParagraph/NavigationItemParagraph";
const NavigationItems = props => {

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItemParagraph>About</NavigationItemParagraph>
      <NavigationItemLink link="https://github.com/quay189/">
        {" "}
        GITHUB{" "}
      </NavigationItemLink>
    </ul>
  );
};

export default NavigationItems;
