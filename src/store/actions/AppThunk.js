import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const fetchData = () => {
  return {
    type: actionTypes.FETCH_DATA
  };
};

export const fetchForecastSuccess = currentForecast => {
  return {
    type: actionTypes.FETCH_FORECAST_SUCCESS,
    currentForecast: currentForecast
  };
};
export const fetchWeatherSuccess = currentWeather => {
  return {
    type: actionTypes.FETCH_WEATHER_SUCCESS,
    currentWeather: currentWeather
  };
};

export const fetchDataFailed = () => {
  return {
    type: actionTypes.FETCH_DATA_FAILED
  };
};

export const initData = () => {
  return dispatch => {
    dispatch(fetchData());
    const enterCityName = "Hanoi";
    const query =
      enterCityName.length === 0
        ? ""
        : `?q=${enterCityName}&units=metric&APPID=baedc2f2f31b7b3303e5d42d88d283c3`;
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather/${query}`)
      .then(responseData => {
        dispatch(fetchWeatherSuccess(responseData.data));
      })
      .catch(error => {
        dispatch(fetchDataFailed());
      });
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast/${query}`)
      .then(responseData => {
        const forecast = [];
        for (let i = 0; i < responseData.data.list.length; i += 8) {
          forecast.push(responseData.data.list[i + 4]);
        }

        dispatch(fetchForecastSuccess(forecast));
      })
      .catch(error => {
        dispatch(fetchDataFailed());
      });
  };
};

export const showModalAbout = showModalAbout => {
  return {
    type: actionTypes.SHOW_MODAL_ABOUT,
    showModalAbout: showModalAbout
  };
};

export const setCityName = cityName => {
  return {
    type: actionTypes.SET_CITYNAME,
    cityName: cityName
  };
};

export const setDataSearch = cityName => {
  return dispatch => {
    dispatch(fetchData());
    const query =
      cityName.length === 0
        ? ""
        : `?q=${cityName}&units=metric&APPID=baedc2f2f31b7b3303e5d42d88d283c3`;
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather/${query}`)
      .then(responseData => {
        dispatch(fetchWeatherSuccess(responseData.data));
        dispatch(setCityName(cityName));
      })
      .catch(error => {
        dispatch(fetchDataFailed());
      });
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast/${query}`)
      .then(responseData => {
        const forecast = [];
        for (let i = 0; i < responseData.data.list.length; i += 8) {
          forecast.push(responseData.data.list[i + 4]);
        }

        dispatch(fetchForecastSuccess(forecast));
        dispatch(setCityName(cityName));
      })
      .catch(error => {
        dispatch(fetchDataFailed());
      });
  };
};
