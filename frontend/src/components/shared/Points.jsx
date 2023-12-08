import React from "react";
import "./css/points.css";
const Points = (props) => {
  return (
    <div>
      <div className="main-point-div">
        <div className="pointDiv">
          <div className="point me-3">
            <i class="fa-solid fa-record-vinyl"></i>
          </div>
          <div className="pointData">{props.solution}</div>
        </div>
      </div>
    </div>
  );
};

export default Points;
