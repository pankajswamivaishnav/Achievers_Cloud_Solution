import React from "react";

const SinglePageWhyCard = (props) => {
  return (
    <div className="col-xl-6 col-md-6 col-sm-12 service-detail-single-page">
      <div className="row mt-3 mb-3">
        <div className="col-xl-2 col-sm-12">
          <p className="points">0{props.service.id}.</p>
        </div>
        <div className="col-xl-10 col-sm-12">
          <h3>{props.service.title}</h3>
          <p>{props.service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePageWhyCard;
