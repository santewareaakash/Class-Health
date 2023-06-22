import React from "react";
import spinner from "../../../assets/spinner.gif";
import "../StyleSheets/Spinner.css";

const Spinner = () => {
  return (
    <div className="loadingSpinnerContainer">
      <img src={spinner} width="150px" alt="Loading" />
    </div>
  );
};

export default Spinner;
