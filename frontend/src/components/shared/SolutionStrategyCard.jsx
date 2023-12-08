import React from "react";

const SolutionStrategyCard = (props) => {
  return (
    <div className="card solu-strat-mainDiv col-xl-3 col-md-5 col-sm-10">
      {/* <div className="card solu-strat-mainDiv" style={{ width: "18rem" }}> */}
      {/* <img className="card-img-top" src="..." alt="Card imag cap" /> */}
      <i className={`${props.service.icon} solu-strat-icon`}></i>
      <div className="card-body">
        <h5 className="card-title">{props.service.title}</h5>
        <p className="card-text">{props.service.description}</p>
        {/* <a href="#" className="btn btn-primary">
Go somewhere
</a> */}
      </div>
    </div>
  );
};

export default SolutionStrategyCard;
