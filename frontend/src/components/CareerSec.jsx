import React from "react";
import "./css/careerSec.css";
import careerPost from "./temp_data/careerPost";
import Careerbox from "./shared/Careerbox";

// Start Function
const CareerSec = () => {
  return (
    <section className="career-sec">
      <div className="container-fluid">
        <div className="container">
          <i className="fa-solid fa-briefcase fs-2 current-opening-icon"></i>
          <h2 className="text-center">Current Openings</h2>
          <div className="row">
            {careerPost.map((data) => {
              return (
                <Careerbox
                  key={data.id}
                  post={data.position}
                  location={data.location}
                  content={data.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSec;
