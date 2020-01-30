import React from "react";
import classes from "./Modal.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const modal = props => {
  return (
    <React.Fragment>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateX(74vw)" : "translateX(100vw)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
    </React.Fragment>
  );
};

export default React.memo(
  modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
