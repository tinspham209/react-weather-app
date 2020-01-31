import React from "react";

import classes from "./NavigationItemParagraph.css";
import { useDispatch } from "react-redux";
import * as actions from "../../../../store/actions/AppThunk";

const NavigationItemParagraph = props => {
  const dispatch = useDispatch();
  const toggleDrawerHandler = () => {
    dispatch(actions.showModalAbout(true));
  };

  return (
    <li className={classes.NavigationItemParagraph}>
      <p onClick={toggleDrawerHandler}>{props.children}</p>
    </li>
  );
};

export default NavigationItemParagraph;
