import React from "react";
import classes from "./About.css";
import Backdrop from "../UI/Backdrop/Backdrop";
const about = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateX(-100vh)" : "translateX(-50vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <div className={classes.About}>
          <div>
            <b>React Weather</b> <p>is a labor of </p>
            <span style={{ color: "red" }}>♥</span>
            <p>project lovingly crafted by </p>
            <a
              href="https://github.com/quay189"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tinspham209
            </a>
          </div>
          <hr />
          <div>
            <h3>Credits</h3>
            <ul>
              <li>
                <a
                  href="https://material-ui.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Material UI
                </a>
              </li>
              <li>
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenWeatherMap API
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/erikflowers/weather-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Erik Flowers' weather icons
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
