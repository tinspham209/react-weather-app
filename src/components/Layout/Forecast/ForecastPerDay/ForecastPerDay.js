import React, {useRef} from "react";
import classes from "./ForecastPerDay.css";
import { useDrag, useDrop } from "react-dnd";
import * as weatherIcons from "../../../../database/icons.json";
import { getIcon } from "../../../../shared/utility";

const ForecastPerDay = props => {
  const lowTemp = Math.floor(props.lowTemp);
  const highTemp = Math.floor(props.highTemp);

  const icon = getIcon(weatherIcons.default[props.id]);
  const id = props.idSource;
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: {type: "card", id},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.5 : 1;
  const [, drop] = useDrop({
    accept: "card",
    drop(item, monitor) {
      console.log('item', item.id);
      props.onDrop(item.id, props.idSource);
    }
  });
  
  drop(ref);
  drag(ref);



  return (
    <div ref={ref} style={{opacity}} className={classes.ForecastPerDay} >
      <div className={classes.row}>
        <div className={classes.col} style={{ flexGrow: "4" }}>
          <span>{props.day}</span>
        </div>
        <div className={classes.col} style={{ flexGrow: "2" }}>
          <div className={icon} style={{ color: "purple" }}></div>
        </div>
        <div className={classes.col} style={{ flexGrow: "4" }}>
          <span>
            {lowTemp}&deg; / {highTemp}&deg;
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForecastPerDay;
