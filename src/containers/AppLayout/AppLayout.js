import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import Search from "../../components/Layout/Search/Search";
import Weather from "../../components/Layout/Weather/Weather";
import Forecast from "../../components/Layout/Forecast/Forecast";
import ModalAbout from "../../components/About/Modal/Modal";
import About from "../../components/About/About";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from "../../store/actions/AppThunk";

const AppLayout = props => {
  const dispatch = useDispatch();

  const currentWeather = useSelector(state => state.currentWeather);
  const currentForecast = useSelector(state => state.currentForecast);
  // eslint-disable-next-line
  const error = useSelector(state => state.error);
  const loading = useSelector(state => state.loading);
  const showModalAbout = useSelector(state => state.showModalAbout);

  const toggleDrawerHandler = useCallback(
    () => dispatch(actions.showModalAbout(!showModalAbout)),
    [dispatch, showModalAbout]
  );
  const onInitData = useCallback(() => dispatch(actions.initData()), [
    dispatch
  ]);

  //componentDidMount
  useEffect(() => {
    onInitData();
  }, [onInitData]);

  let weather = <Spinner />;
  if (currentWeather && currentForecast && !loading) {
    weather = (
      <React.Fragment>
        <ModalAbout show={showModalAbout} modalClosed={toggleDrawerHandler}>
          <About />
        </ModalAbout>
        <Weather currentWeather={currentWeather} />
        <Forecast currentForecast={currentForecast} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Search />
      {weather}
    </React.Fragment>
  );
};

export default withErrorHandler(AppLayout, axios);
