import React from "react";

const TestimonialItem = (props) => {
  return (
    <div>
      <img
        className="rounded-circle shadow-1-strong mb-4"
        src={props.imgsrc}
        style={{ width: "150px" }}
        alt={props.position + "image"}
      />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">{props.name}</h5>
          <p>{props.position}</p>
          <p className="text-muted costum-testimonial_para">
            <i className="fas fa-quote-left pe-2" />
            {props.content}
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li>
          <i className="fas fa-star fa-sm" />
        </li>
        <li>
          <i className="fas fa-star fa-sm" />
        </li>
        <li>
          <i className="fas fa-star fa-sm" />
        </li>
        <li>
          <i className="fas fa-star fa-sm" />
        </li>
        <li>
          <i className="far fa-star fa-sm" />
        </li>
      </ul>
    </div>
  );
};

export default TestimonialItem;
