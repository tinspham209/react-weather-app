import React from "react";
import "./Forecast.css";
const forecast = props => {
  return (
    <div className="Forecast">
      <div className="ForecastHeader">
        <span>Hue, VN</span>
        <span>Saturday, 4:43PM, Few Clouds</span>
      </div>

      <div className="row">
        <div className="col">
          <h2>29*C</h2>
          <h4 className="">
            <span className="wi wi-strong-wind jss286 jss275"> 21km/h Winds</span>
            <span className="wi wi-humidity jss286 jss275"> 58% Humidity</span>
          </h4>
        </div>
        <div className="col">
          <div className="wi wi-day-sunny-overcast jss286"></div>
        </div>
      </div>
      <div className="sologan">
        <p>
          Great day for a bit of laundry and maybe a nice picnic date later :)
        </p>
      </div>
    </div>
  );
};

export default forecast;
