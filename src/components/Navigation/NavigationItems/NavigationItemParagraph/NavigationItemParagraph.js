import React, {useState} from "react";

import classes from "./NavigationItemParagraph.css";

const NavigationItemParagraph = props => {
  const [show, setShow] = useState(false);
  const onClickedHandler = () => {
    setShow(!show);
    console.log('show', show);
  }
  return (
    <li className={classes.NavigationItemParagraph}>
      <p onClick={onClickedHandler}>{props.children}</p>
    </li>
  );
};

export default NavigationItemParagraph;
