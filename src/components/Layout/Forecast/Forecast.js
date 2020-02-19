import React, { useState, useEffect } from "react";
import ForecastPerDay from "./ForecastPerDay/ForecastPerDay";
import classes from "./Forecast.css";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import { getWeekday, getDate } from "../../../shared/utility";
const Forecast = props => {
  // let foreCastSelected = forecast.find(foreCastSelected => foreCastPerDay.idSource === idSource);
  const [forecast, setForecast] = useState(props.currentForecast);
  console.log('forecast', forecast);
  useEffect(() => {
    setForecast(props.currentForecast);
  }, [props.currentForecast]);
  const onDrop = (idItemDrag, idItemDrop) => {
    const indexDrag = forecast.findIndex( item => item.dt === idItemDrag );
    const indexDrop = forecast.findIndex( item => item.dt === idItemDrop );

    let newForecast = [...forecast];
    const forecastDrag = newForecast[indexDrag];
    console.log('newForecast', newForecast);
    for(let index = indexDrag; index < indexDrop; index++){
      newForecast[index] = newForecast[index+1];
    }
    newForecast[indexDrop] = forecastDrag;
    setForecast(newForecast);
  };
  let forecastPerDay = forecast.map(object => {
    const daytime = object.dt;
    const date = getDate(daytime);

    return (
      <li key={object.dt}>
        <ForecastPerDay
          day={getWeekday(date)}
          lowTemp={object.main.temp_min}
          highTemp={object.main.temp_max}
          id={object.weather[0].id}
          idSource={object.dt}
          onDrop= {onDrop}
        />
      </li>
    );
  });

  return (
    <div className={classes.Forecast}>
      <DndProvider backend={HTML5Backend}>
        <ul>{forecastPerDay}</ul>
      </DndProvider>
    </div>
  );
};

export default Forecast;
