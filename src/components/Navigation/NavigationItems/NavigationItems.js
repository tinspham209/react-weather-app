import React from 'react'
import classes from "./NavigationItems.css"

import NavigationItemLink from "./NavigationItemLink/NavigationItemLink";
import NavigationItemParagraph from "./NavigationItemParagraph/NavigationItemParagraph";
const navigationItems = (props) => (
     <ul className={classes.NavigationItems} >
          {/* <NavigationItem link="/">About</NavigationItem> */}
          <NavigationItemParagraph >About</NavigationItemParagraph>
          <NavigationItemLink link="/"> GITHUB </NavigationItemLink>
     </ul>
)

export default navigationItems;