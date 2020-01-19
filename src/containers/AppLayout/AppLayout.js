import React from "react";
import Search from "../../components/Search/Search";
import Forecast from "../../components/Layout/Forecast/Forecast";
import WeatherCards from "../../components/Layout/WeatherCards/WeatherCards";
const appLayout = props => {
  return (
    <React.Fragment>
      <Search />
      <Forecast />
      
      <WeatherCards />
    </React.Fragment>
  );
};

export default appLayout;
