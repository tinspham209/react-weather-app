import React from "react";
import ForecastPerDay from "./ForecastPerDay/ForecastPerDay";
import classes from "./Forecast.css";
import {getWeekday, getDate} from '../../../shared/utility';
const forecast = props => {
  console.log("props.currentForecast-Forecast", props.currentForecast);

  let forecastPerDay = Object.keys(props.currentForecast).map(index => {
    return [...Array(props.currentForecast[index])].map(object => {
      const daytime = object.dt;
      const date = getDate(daytime);
      const day = getWeekday(date);
      
      return (
        <li key={index}>
          <ForecastPerDay
            day={day}
            lowTemp={object.main.temp_min}
            highTemp={object.main.temp_max}
            id={object.weather[0].id}
          />
        </li>
      );
    });
  });

  return (
    <div className={classes.Forecast}>
      <ul>{forecastPerDay}</ul>
    </div>
  );
};

export default forecast;
