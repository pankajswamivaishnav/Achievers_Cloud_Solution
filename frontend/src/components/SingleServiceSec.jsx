import React from "react";
import "./css/singleservicesec.css";
const SingleServiceSec = (props) => {
  return (
    <section className="single-service-sec">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {/* Image */}
            <div className="col-xl-12 col-md-12 single-service-left-box">
              <div className="row">
                {/* First Big Image */}
                <div className="col-xl-12  service-detail-single-page">
                  <img
                    src={props.imgSrc1}
                    alt="web-dev-service-img"
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-12  service-detail-single-page">
                  <h2>{props.title}</h2>
                  <p>{props.content}</p>
                </div>
                {/* Small Image */}
                <div className="col-xl-6 col-md-6 col-sm-12 service-detail-single-page">
                  <img
                    src={props.imgSrc2}
                    alt="web-dev-service-img"
                    className="img-fluid"
                  />
                </div>
                {/* Small Image */}
                <div className="col-xl-6 col-md-6 col-sm-12 service-detail-single-page">
                  <img
                    src={props.imgSrc3}
                    alt="web-dev-service-img"
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 service-detail-single-page">
                  <div className="row mt-3 mb-3">
                    <div className="col-xl-2 col-sm-12">
                      <p className="points">01.</p>
                    </div>
                    <div className="col-xl-10 col-sm-12">
                      <h3>Latest Technologies</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugiat vitae velit laborum ipsam. Magnam placeat
                        aut nihil, quaerat voluptas blanditiis. quia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 service-detail-single-page">
                  <div className="row mt-3 mb-3">
                    <div className="col-xl-2 col-sm-12">
                      <p className="points">02.</p>
                    </div>
                    <div className="col-xl-10 col-sm-12">
                      <h3>Uniqe Solutions</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugiat vitae velit laborum ipsam. Magnam placeat
                        aut nihil, quaerat voluptas blanditiis. quia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 service-detail-single-page-points">
                  <div className="row mt-3 mb-3">
                    <div className="col-xl-2 col-sm-12">
                      <p className="points">03.</p>
                    </div>
                    <div className="col-xl-10 col-sm-12">
                      <h3>Powerful Stratgies</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugiat vitae velit laborum ipsam. Magnam placeat
                        aut nihil, quaerat voluptas blanditiis. quia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 service-detail-single-page-points">
                  <div className="row mt-3 mb-3">
                    <div className="col-xl-2 col-sm-12">
                      <p className="points">04.</p>
                    </div>
                    <div className="col-xl-10 col-sm-12">
                      <h3>Deliver On Just Time</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugiat vitae velit laborum ipsam. Magnam placeat
                        aut nihil, quaerat voluptas blanditiis. quia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceSec;
