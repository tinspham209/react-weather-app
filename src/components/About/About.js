import React from "react";
import classes from "./About.css";
import Backdrop from "../UI/Backdrop/Backdrop";
const About = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div>
        <div className={classes.About}>
          <div>
            <b>React Weather</b>{" "}
            <p>
              is a labor of <span style={{ color: "red" }}>♥</span> project
              lovingly crafted by{" "}
              <a
                href="https://github.com/quay189"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tinspham209
              </a>
            </p>
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

export default About;
