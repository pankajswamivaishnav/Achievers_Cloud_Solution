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

          <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span className="ps-2">
              <b>Experience: </b>
              {props.exp}
            </span>
          </div>
          <div>
            <i class="fa-solid fa-file-lines"></i>
            <span className="ps-2">
              <b>Job Description: </b>
              {props.description}
            </span>
            <div>{props.points}</div>
          </div>
          <a href="mailto:hr@fantasykhiladi.com">
            <button className="costum-career-btn">Apply Now</button>
          </a>
        </div>
      </details>
    </div>
  );
};

export default Careerbox;
