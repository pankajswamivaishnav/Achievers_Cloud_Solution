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
                  <h1>{props.title}</h1>
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
            {/* List Of Services */}
            {/* <div className="col-xl-4 col-md-12 single-service-left-box">
              <div className="container d-flex flex-column align-items-center costum-list-container">
                <h4 className="list-services-heading-single-page">
                  List Of Services
                </h4>
                <div className="web-dev list-services-single-page">
                  <i className="fa-solid fa-code me-3"></i>
                  <a href="/Web-Development/1"> Web Development</a>
                </div>
                <div className="digital-mark list-services-single-page">
                  <i className="fas fa-chart-line me-3"></i>
                  <a href="/Digital-Marketing/2"> Digital Marketing</a>
                </div>
                <div className="saas-pro list-services-single-page">
                  <i className="fas fa-cubes me-3"></i>
                  <a href="/Game-Development/3">Game Development</a>
                </div>
                <div className="apps-dev list-services-single-page">
                  <i className="fas fa-mobile-alt me-3"></i>
                  <a href="/Salesforce/4">Salesforce</a>
                </div>
                <div className="seo list-services-single-page">
                  <i className="fas fa-search me-3"></i>
                  <a href="/Seo-Services/5"> Seo Services</a>
                </div>
                <div className="data-ana list-services-single-page">
                  <i className="fas fa-chart-bar me-3"></i>
                  <a href="/Payment-Gateway/6">Payment Gateway</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceSec;
