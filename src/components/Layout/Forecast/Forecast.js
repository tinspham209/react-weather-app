import React from "react";
import ForecastPerDay from "./ForecastPerDay/ForecastPerDay";
import classes from "./Forecast.css";
const forecast = props => {
  console.log("props.currentForecast-Forecast", props.currentForecast);

  let forecastPerDay = Object.keys(props.currentForecast).map(index => {
    return [...Array(props.currentForecast[index])].map(object => {
      const dt = object.dt;
      const date = new Date(dt * 1000);
      const weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
      const day = weekday[date.getDay()];
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
