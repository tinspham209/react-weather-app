import React from 'react'
import logoImg from "../../assests/logo.png";
import classes from "./Logo.css";

const logo = props => (
     <div className={classes.Logo} style={{height: props.height}}>
          <img src={logoImg} alt="ReactWeatherApp" />
     </div>
)

export default logo;