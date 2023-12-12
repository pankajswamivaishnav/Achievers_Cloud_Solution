import React from "react";
import "./css/singlePageWhyCard.css";
const SinglePageWhyCard = (props) => {
  return (
    <div className="col-xl-6 col-md-6 col-sm-12 service-detail-single-page">
      <div className="row mt-3 mb-3">
        <div className="col-xl-2 col-sm-12">
          <p className="points">0{props.service.id}.</p>
          <p className="service-detail-single-page-point-para">
            {/* <i class="fa-solid fa-square-check"></i> */}
          </p>
        </div>
        <div className="col-xl-10 col-sm-12">
          <h3>{props.service.title}</h3>
          <p>{props.service.description}</p>
          {/* <ul>
            {Object.values(props.service.description).map((point, index) => (
              <li className="single-page-why-card" key={index}>
                {point}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePageWhyCard;
