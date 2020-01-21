import React from "react";
import classes from "./ForecastPerDay.css";
import * as weatherIcons from "../../../../database/icons.json"
const forecastPerDay = props => {
  const lowTemp = Math.floor(props.lowTemp);
  const highTemp = Math.floor(props.highTemp);
  const prefix = "wi wi-";
  const icon = prefix + weatherIcons.default[props.id].icon;

  return (
    <div className={classes.ForecastPerDay}>
      <div className={classes.row}>
        <div className={classes.col} style={{flexGrow: '4'}}>
          <span>{props.day}</span>
        </div>
        <div className={classes.col} style={{flexGrow: '2'}}>
          <div className={icon} ></div>
        </div>
        <div className={classes.col} style={{flexGrow: '4'}}>
          <span>
            {lowTemp}&deg; / {highTemp}&deg;
          </span>
        </div>
      </div>
    </div>
  );
};

export default forecastPerDay;