import React, { useState, useEffect, useRef } from "react";
import classes from "./Search.css";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions/AppThunk";
const Search = props => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [enterCityName, setEnterCityName] = useState(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enterCityName === inputRef.current.value) {
        dispatch(actions.setDataSearch(enterCityName));
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [enterCityName, inputRef, dispatch]);
  
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
