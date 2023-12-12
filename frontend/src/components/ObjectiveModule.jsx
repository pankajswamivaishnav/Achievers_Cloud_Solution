import React from "react";
import "./css/objectiveModule.css";
import ObjectiveImg from "./images/web-dev-service.jpg";
const ObjectiveModule = () => {
  return (
    <section className="objective-sec">
      <div className="container-fluid">
        <div className="container objective-container">
          <div className="row">
            <div className="objective-right-div col-xl-6">
              <img src={ObjectiveImg} alt="random-img" className="img-fluid" />
            </div>
            <div className="objective-left-div col-xl-6">
              <h2>
                Our Objective As a Trusted Digital Marketing Company in Jaipur
              </h2>
              <ul className="pt-3">
                <li>
                  <div className="objective-module-point">
                    <i class="fa-solid fa-arrow-right objective-module-point-i"></i>
                    <p className="objective-module-point-para">
                      Deliver creative and brilliant content for your business
                      digital platforms
                    </p>
                  </div>
                </li>
                <li>
                  <div className="objective-module-point">
                    <i class="fa-solid fa-arrow-right objective-module-point-i"></i>
                    <p className="objective-module-point-para">
                      Deliver creative and brilliant content for your business
                      digital platforms
                    </p>
                  </div>
                </li>
                <li>
                  <div className="objective-module-point">
                    <i class="fa-solid fa-arrow-right objective-module-point-i"></i>
                    <p className="objective-module-point-para">
                      Deliver creative and brilliant content for your business
                      digital platforms
                    </p>
                  </div>
                </li>
                <li>
                  <div className="objective-module-point">
                    <i class="fa-solid fa-arrow-right objective-module-point-i"></i>
                    <p className="objective-module-point-para">
                      Deliver creative and brilliant content for your business
                      digital platforms
                    </p>
                  </div>
                </li>
                <li>
                  <div className="objective-module-point">
                    <i class="fa-solid fa-arrow-right objective-module-point-i"></i>
                    <p className="objective-module-point-para">
                      Deliver creative and brilliant content for your business
                      digital platforms
                    </p>
                  </div>
                </li>
                <li>
                  <div className="objective-module-point">
                    <i class="fa-solid fa-arrow-right objective-module-point-i"></i>
                    <p className="objective-module-point-para">
                      Deliver creative and brilliant content for your business
                      digital platforms
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveModule;
