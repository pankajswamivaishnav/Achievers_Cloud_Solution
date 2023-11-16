import React from "react";
import "./css/card.css";
const Card = (props) => {
  // Text Length
  const maxLength = 70; // Maximum length for the text (adjust as needed)
  const titleLength = 40;
  const trimmedTitle =
    props.title.length > titleLength
      ? props.title.substring(0, titleLength)
      : props.title;
  const trimmedText =
    props.text.length > maxLength
      ? props.text.substring(0, maxLength) + " ..... "
      : props.text;
  return (
    <div className="col-xl-4 col-md-6 col-sm-12">
      {/* Card */}
      <div className="card costum-card rounded costum-blog-card-body">
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img src={props.imgsrc} className="img-fluid" alt="card_random_img" />
          <a href="/">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            />
          </a>
        </div>
        <div className="ps-3 pt-3 blog_author">
          <i className="fa-regular fa-user"></i>&nbsp; <span>Authore</span>
        </div>
        <div className="card-body">
          <h3 className="card-title costum-card-title">{trimmedTitle}</h3>
          <p className="card-text">{trimmedText}</p>
          <a href="/" id="card_read_more">
            <span>Read More</span> &nbsp;
            <i className="fa-solid fa-arrow-right fa-costum-color"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
