import React from "react";
import "./css/serviceCard2.css";
const ServiceCard2 = (props) => {
  return (
    <section className="service-card-2-sec">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="service-card-2-left col-xl-6">
              <img src={props.imgSrc} alt="random-img" className="img-fluid" />
            </div>
            <div className="service-card-2-right mt-xl-5 col-xl-6">
              <h2>
                Real <span className="text-info">State</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                modi dignissimos est aliquam, voluptatibus, quas voluptate
                commodi, vitae totam quod tenetur! Repellendus vel voluptatibus
                maxime, perspiciatis quod commodi fugiat ducimus.
              </p>
              <div className="service-card-small-divs">
                <div className="row">
                  <div className="col-xl-6 service-card-small-div">
                    <p className="service-card-small-div-para">
                      Design Your House Together
                    </p>
                  </div>
                  <div className="col-xl-6 service-card-small-div">
                    <p className="service-card-small-div-para">Walk Around</p>
                  </div>
                  <div className="col-xl-6 service-card-small-div">
                    <p className="service-card-small-div-para">
                      Invite Friend To Your House
                    </p>
                  </div>
                  <div className="col-xl-6 service-card-small-div">
                    <p className="service-card-small-div-para">
                      Visualize Your Network
                    </p>
                  </div>
                </div>
              </div>
              <button className="service-card2-button btn btn-info mt-xl-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard2;
