import React, { useState, useEffect, useRef } from "react";
import classes from "./Search.css";
import axios from "../../../axios-orders";
const Search = props => {
  const [enterCityName, setEnterCityName] = useState("Hanoi");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  const { onLoadWeather, onLoadForecast } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enterCityName === inputRef.current.value) {
        setIsLoading(true);
        const query =
          enterCityName.length === 0
            ? ""
            : `?q=${enterCityName}&units=metric&APPID=baedc2f2f31b7b3303e5d42d88d283c3`;
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather/${query}`)
          .then(responseData => {
            setCurrentWeather(responseData.data);
            setIsLoading(false);
          })
          .catch(error => {
            setIsError(error);
            setIsLoading(true);
          });
        axios
          .get(`https://api.openweathermap.org/data/2.5/forecast/${query}`)
          .then(responseData => {
            const forecast = [];
            console.log(
              "responseData.data.list.length",
              responseData.data.list.length
            );
            for (let i = 0; i < responseData.data.list.length; i += 8) {
              forecast.push(responseData.data.list[i + 4]);
            }
            setCurrentForecast(forecast);
            setIsLoading(false);
          })
          .catch(error => {
            setIsError(error);
            setIsLoading(true);
          });
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [enterCityName, inputRef]);

  useEffect(() => {
    if (!isLoading && !isError && currentWeather && currentForecast) {
      console.log("currentWeather-Search", currentWeather);
      console.log("currentForecast-Search", currentForecast);
      onLoadWeather(currentWeather, isLoading, isError);
      onLoadForecast(currentForecast, isLoading, isError);
    }
  }, [
    currentWeather,
    currentForecast,
    onLoadWeather,
    onLoadForecast,
    isLoading,
    isError
  ]);

  //https://api.openweathermap.org/data/2.5/weather/?q=Hanoi&units=metric&
  //APPID=70074b1322dfa5700b4a6eac6922484f
  return (
    <div className={classes.Search}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter city name"
        value={enterCityName}
        onChange={event => setEnterCityName(event.target.value)}
      />
    </div>
  );
};

export default Search;
