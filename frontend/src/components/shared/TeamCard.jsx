import React from "react";
import "./css/teamcard.css";
const TeamCard = (props) => {
  return (
    <div className="team-block col-lg-4 col-md-6 col-sm-12 my-3">
      <div
        className="inner-box wow fadeInLeft"
        data-wow-delay="0ms"
        data-wow-duration="1500m"
      >
        <ul className="social-icons">
          <li>
            <a href="/">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-skype" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
        <div className="image">
          <img src={props.imgSrc} alt={props.position + "Image"} />
        </div>
        <div className="lower-content">
          <h3>
            <a href="/">{props.name}</a>
          </h3>
          <div className="designation">{props.position} </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
