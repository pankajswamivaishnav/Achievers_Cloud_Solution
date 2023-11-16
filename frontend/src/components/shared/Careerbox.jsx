import React from "react";
import "./css/careerBox.css";
const Careerbox = (props) => {
  return (
    <div className="col-xl-12 my-2" id={props.id}>
      <details className="career-details">
        <summary className="career-summary fs-5">{props.post}</summary>
        <div>
          <div className="py-2">
            <i class="fa-solid fa-location-dot"></i>
            <span className="ps-2">{props.location}</span>
          </div>
          <p className="career-box-para">{props.content}</p>
          <a href="mailto:hr@fantasykhiladi.com">
            <button className="costum-career-btn">Apply Now</button>
          </a>
        </div>
      </details>
    </div>
  );
};

export default Careerbox;
