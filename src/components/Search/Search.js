import React from "react";
import "./Search.css";
const search = props => {
  return (
    <div className="form-style-8">
     <img src={require("../../assests/search.png")} className="searchImage" alt="search"/>
      <input type="text" name="field1" placeholder="Enter city name" />
      <input type="button" value="Search" />
    </div>
  );
};

export default search;
