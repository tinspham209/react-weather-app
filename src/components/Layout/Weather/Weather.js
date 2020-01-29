import React from "react";
import classes from "./Weather.css";
import * as weatherIcons from "../../../database/icons.json";
import * as recommendations from "../../../database/recommendations.json";
const weather = props => {
  let temp = props.currentWeather.main.temp;

  let location = props.currentWeather.name;

  let country = props.currentWeather.sys.country;

  let dt = props.currentWeather.dt;
  let date = new Date(dt * 1000);
  let hour = date.getHours();
  let minutes = "0" + date.getMinutes();
  let formattedTime = hour + ":" + minutes.substr(-2);
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let day = weekday[date.getDay()];

  let description = props.currentWeather.weather[0].description;
  let upperCaseDescription =
    description.charAt(0).toUpperCase() + description.slice(1);
  
  let windSpeed = Math.floor(props.currentWeather.wind.speed * 3.6);
  
  let humidity = props.currentWeather.main.humidity;

  //get className of icon
  const prefix = "wi wi-";
  const icon =
    prefix + weatherIcons.default[props.currentWeather.weather[0].id].icon;
  const recommendation =
    recommendations.default[props.currentWeather.weather[0].id].recommendation;

  return (
    <div className={classes.Weather}>
      <div className={classes.WeatherHeader}>
        <span>
          {location}, {country}
        </span>
        <span>
          {day}, {formattedTime}, {upperCaseDescription}
        </span>
      </div>

      <div className={classes.row}>
        <div className={classes.col}>
          <h2>{temp}&deg;C</h2>
          <h4 className="">
            <span
              className="wi wi-strong-wind jss286 jss275"
              style={{ color: "purple" }}
            ></span>
            <span>{windSpeed}km/h Winds</span>
            <span
              className="wi wi-humidity jss286 jss275"
              style={{ color: "purple" }}
            ></span>
            <span>{humidity}% Humidity</span>
          </h4>
        </div>
        <div className={classes.col}>
          <div className={icon} style={{ color: "purple" }}></div>
        </div>
      </div>
      <div className={classes.sologan}>
        <p>
          {recommendation}
        </p>
      </div>
    </div>
  );
};

export default weather;
