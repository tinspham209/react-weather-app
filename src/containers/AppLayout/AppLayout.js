import React, { useState, useCallback } from "react";
import Search from "../../components/Layout/Search/Search";
import Weather from "../../components/Layout/Weather/Weather";
import WeatherCards from "../../components/Layout/Forecast/Forecast";
import Spinner from "../../components/UI/Spinner/Spinner";
import ModalAbout from "../../components/About/Modal/Modal";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import About from "../../components/About/About";
const AppLayout = props => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(true);

  const toggleDrawerHandler = () => {
    setShow(!show);
  };
  /*
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        // "https//:api.openweathermap.org/data/2.5/weather/?q=Hanoi&units=metric&APPID=70074b1322dfa5700b4a6eac6922484f"
        `https://api.openweathermap.org/data/2.5/weather/?q=Hanoi&units=metric&APPID=baedc2f2f31b7b3303e5d42d88d283c3`
        )
      .then(responseData => {
        // this.setState({ currentWeather: responseData.data, loading: false });
        setCurrentWeather(responseData.data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsError(error);
        setIsLoading(true);
      });
  }, []);
*/

  const loadWeatherHandler = useCallback((filteredWeather, loading, error) => {
    setCurrentWeather(filteredWeather);
    console.log("filteredWeather-AppLayout", filteredWeather);
    setIsLoading(loading);
    setIsError(error);
  }, []);

  const loadForecastHandler = useCallback(
    (filteredForecast, loading, error) => {
      setCurrentForecast(filteredForecast);
      console.log("filteredForecast-AppLayout", filteredForecast);
      setIsLoading(loading);
      setIsError(error);
    },
    []
  );

  let weather = <Spinner />;
  if (currentWeather && !isLoading) {
    weather = (
      <React.Fragment>
        <ModalAbout show={show} modalClosed={toggleDrawerHandler}>
          <About />
        </ModalAbout>
        <Weather currentWeather={currentWeather} />
        <WeatherCards currentForecast={currentForecast} />
      </React.Fragment>
    );
  }

  // eslint-disable-next-line
  let error = isError ? <p> Can not get currentWeather</p> : <Spinner />;
  return (
    <React.Fragment>
      <Search
        onLoadWeather={loadWeatherHandler}
        onLoadForecast={loadForecastHandler}
      />
      {weather}
    </React.Fragment>
  );
};

export default withErrorHandler(AppLayout, axios);
