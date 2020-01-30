import React from "react";
import classes from "./ForecastPerDay.css";
import * as weatherIcons from "../../../../database/icons.json"
import {getIcon} from '../../../../shared/utility';
const forecastPerDay = props => {
  const lowTemp = Math.floor(props.lowTemp);
  const highTemp = Math.floor(props.highTemp);
  
  const icon = getIcon(weatherIcons.default[props.id]);

  return (
    <div className={classes.ForecastPerDay}>
      <div className={classes.row}>
        <div className={classes.col} style={{flexGrow: '4'}}>
          <span>{props.day}</span>
        </div>
        <div className={classes.col} style={{flexGrow: '2'}}>
          <div className={icon} style={{color: 'purple'}} ></div>
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