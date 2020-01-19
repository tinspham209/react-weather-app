import React from "react";
import "./WeatherCard.css";
const weatherCard = props => {
  return (
    <div className="WeatherCard">
      <div className="row">
        <div className="col" style={{flexGrow: '4'}}>
          <span>{props.day}</span>
        </div>
        <div className="col"style={{flexGrow: '2'}}>
          <div className="jss334 wi wi-day-cloudy-gusts" ></div>
        </div>
        <div className="col" style={{flexGrow: '4'}}>
          <span>
            {props.lowTemp} / {props.highTemp}
          </span>
        </div>
      </div>
    </div>
  );
};

export default weatherCard;
