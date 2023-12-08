import React from "react";

const KeyStagesCard = (props) => {
  return (
    <div className="card key-stages-mainDiv col-xl-2 col-md-5 col-sm-10">
      {/* <div className="card solu-strat-mainDiv" style={{ width: "18rem" }}> */}
      {/* <img className="card-img-top" src="..." alt="Card imag cap" /> */}
      <i className={`${props.service.icon} key-stages-icon`}></i>
      <div className="card-body">
        <h5 className="card-title">{props.service.title}</h5>
        {/* <p className="card-text">{props.service.description}</p> */}
        {/* <a href="#" className="btn btn-primary">
    Go somewhere
    </a> */}
      </div>
    </div>
  );
};

export default KeyStagesCard;
