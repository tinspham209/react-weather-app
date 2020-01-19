import React from "react";
import WeatherCard from "./WeatherCard/WeatherCard";
import "./WeatherCards.css";
const weatherCards = props => {
  return (
    <div className="WeatherCards">
      <ul>
        <li>
          <WeatherCard day="Sunday" lowTemp="17*" highTemp="18*"/>
        </li>
        <li>
          <WeatherCard day="Monday" lowTemp="17*" highTemp="17*"/>
        </li>
        <li>
          <WeatherCard day="Tuesday" lowTemp="18*" highTemp="19*"/>
        </li>
        <li>
          <WeatherCard day="Wednesday" lowTemp="27*" highTemp="5*"/>
        </li>
        <li>
          <WeatherCard day="Thursday" lowTemp="2*" highTemp="3*"/>
        </li>
      </ul>
    </div>
  );
};

export default weatherCards;
