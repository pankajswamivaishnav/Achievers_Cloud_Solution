import React from "react";
import "./css/aboutourjourney.css";
export function Component1(props) {
  return (
    <div className="our-journey-sec">
      <div className="container-fluid my-5">
        <div className="container">
          <div className="row costum-journey-row">
            {/* Left Part */}
            <div className="col-xl-8 col-md-8 col-sm-8 col-xs-8">
              <p className="journey-para">{props.text}</p>
            </div>
            {/* Right Part */}
            <div className="col-xl-4 col-md-4 col-sm-4 col-xs-4 parent-year">
              <div className="journey-year">
                <p>{props.year}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Component2(props) {
  return (
    <div className="our-journey-sec">
      <div className="container-fluid my-5">
        <div className="container">
          <div className="row costum-journey-row">
            {/* Left Part */}
            <div className="col-xl-4 col-md-4 col-sm-4 col-xs-4  parent-year">
              <div className="journey-year ms-xl-4 ms-sm-0 ms-md-0">
                <p>{props.year}</p>
              </div>
            </div>
            {/* Right Part */}
            <div className="col-xl-8 col-md-8 col-sm-8 col-xs-8">
              <p className="journey-para">{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
