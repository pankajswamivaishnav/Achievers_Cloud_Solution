import React from "react";
import "./css/serviceCard.css";
const ServiceCard = (props) => {
  // Description Length
  const maxLength = 150; // Maximum length for the text (adjust as needed)
  const trimmedDescription =
    props.description.length > maxLength
      ? props.description.substring(0, maxLength) + " ..... "
      : props.description;

  // dynamic url
  const serviceSinglePageUrl = `/${props.title}/${props.id}`;
  return (
    <div className="col-xl-4 col-md-6 col-sm-12 main-service-card-div">
      <div className="service-box p-4 m-2">
        <div className="service-icon service-content">
          <i className={props.icon}></i>
        </div>
        <div className="service-content">
          <h3>{props.title}</h3>
          <p>{trimmedDescription}</p>
        </div>
        <a
          href={serviceSinglePageUrl}
          id="card_read_more"
          className="service-content"
        >
          <span>Read More</span> &nbsp;
          <i class="fa-solid fa-arrow-right fa-costum-color"></i>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
