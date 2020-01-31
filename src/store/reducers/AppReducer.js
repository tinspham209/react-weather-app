import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initState = {
  cityName: "Hanoi",
  currentWeather: null,
  currentForecast: null,
  error: false,
  loading: false,
  showModalAbout: false
};

const reducers = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_DATA_FAILED:
      return updateObject(state, { error: true, loading: false });
    case actionTypes.FETCH_WEATHER_SUCCESS:
      return updateObject(state, {
        currentWeather: action.currentWeather,
        loading: false
      });
    case actionTypes.FETCH_FORECAST_SUCCESS:
      return updateObject(state, {
        currentForecast: action.currentForecast,
        loading: false
      });
    case actionTypes.SHOW_MODAL_ABOUT:
      return updateObject(state, { showModalAbout: action.showModalAbout });
    case actionTypes.SET_CITYNAME:
      return updateObject(state, { cityName: action.cityName });
    default:
      return state;
  }
};

export default reducers;
