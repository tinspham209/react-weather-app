import React from "react";
import classes from "./Weather.css";
import * as weatherIcons from "../../../database/icons.json";
import * as recommendations from "../../../database/recommendations.json";
import {
  getWeekday,
  getDate,
  getTimes,
  upperCaseString,
  getRecommendation,
  getIcon
} from "../../../shared/utility";

const weather = props => {
  const temp = props.currentWeather.main.temp;

  const location = props.currentWeather.name;

  const country = props.currentWeather.sys.country;

  const daytime = props.currentWeather.dt;
  const date = getDate(daytime);
  const day = getWeekday(date);
  const formattedTime = getTimes(date);

  const description = props.currentWeather.weather[0].description;
  const upperCaseDescription = upperCaseString(description);

  const windSpeed = Math.floor(props.currentWeather.wind.speed * 3.6);

  const humidity = props.currentWeather.main.humidity;

  //get className of icon
  const icon = getIcon(
    weatherIcons.default[props.currentWeather.weather[0].id]
  );
  const recommendation = getRecommendation(
    recommendations.default[props.currentWeather.weather[0].id]
  );

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
        <p>{recommendation}</p>
      </div>
    </div>
  );
};

export default weather;
