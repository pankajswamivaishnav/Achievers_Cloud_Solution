import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/singleservicesec.css";
import SinglePageWhyCard from "./shared/SinglePageWhyCard";
import {
  webDevelopment,
  gameDevelopment,
  digitalMarketing,
  salesforce,
  paymentGateway,
} from "./temp_data/SinglePageWhyData";
// Function Start
const SingleServiceSec = (props) => {
  const location = useLocation();

  const [serviceArrayData, setServiceArray] = useState([]);

  // Title ke basis pe service find karna
  function findServiceByTitle(category) {
    let serviceArray;

    // Choose category array based on category name
    switch (category) {
      case "Web-Development":
        serviceArray = webDevelopment;
        break;
      case "Digital-Marketing":
        serviceArray = digitalMarketing;
        break;
      case "Game-Development":
        serviceArray = gameDevelopment;
        break;
      case "Salesforce":
        serviceArray = salesforce;
        break;
      case "Payment-Gateway":
        serviceArray = paymentGateway;
        break;
      default:
        serviceArray = [];
    }
    setServiceArray(serviceArray);
  }

  useEffect(() => {
    // Get the current URL from the location object
    const { pathname, search, hash } = location;
    const url = `${pathname}${search}${hash}`;
    const segments = url.split("/");
    const desiredContent = segments[1];
    // setCurrentURL(desiredContent);
    findServiceByTitle(desiredContent);
    // Find data based on current URL
  }, [location]);

  return (
    <section className="single-service-sec">
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            {/* Image */}
            <div className="col-xl-12 col-md-12 single-service-left-box">
              <div className="row">
                {/* First Big Image */}
                {/* <div className="col-xl-12  service-detail-single-page">
                  <img
                    src={props.imgSrc1}
                    alt="web-dev-service-img"
                    className="img-fluid"
                  />
                </div> */}
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
                {/* Points */}
                {/* <div className="col-xl-6 col-md-6 col-sm-12 service-detail-single-page">
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
                </div> */}
                <h2>Why Choose Us:</h2>
                {serviceArrayData.map((service, index) => (
                  <SinglePageWhyCard service={service} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServiceSec;
