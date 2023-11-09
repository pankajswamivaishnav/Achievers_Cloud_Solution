import React from "react";
import "./css/serviceheader.css";

// import serviceImg from "./images/services_img.png";
const ServiceHeader = (props) => {
  return (
    <header className="about-header">
      <div className="main-div container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 costum-about-us-header-container">
              <div className="parent-heading">
                <div className="child-heading">
                  <h1 className="services-heading">{props.service}</h1>
                  <p className="blog-path text-center service-sub-heading-para">
                    {/* <i className="fa-solid fa-house"></i>&nbsp; */}
                    {props.heading}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 costum-about-us-img-container">
              <img src={serviceImg} alt="about-us" className="img-fluid" />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ServiceHeader;
