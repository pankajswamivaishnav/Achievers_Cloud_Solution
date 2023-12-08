import React, { useEffect, useState } from "react";
import ServiceCard from "./shared/ServiceCard";
import {
  webDevelopment,
  gameDevelopment,
  digitalMarketing,
  salesforce,
  paymentGateway,
} from "./temp_data/SinglePageServicesData";
// React Router Dom
import { useLocation } from "react-router-dom";
import "./css/services.css";
// Function Start
const SinglePageServices = () => {
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
    <section className="services_sec">
      {/* Upper Div */}
      <div classname="upperDiv container-fluid">
        <div className="container">
          <div className="row py-4">
            <div className="card my-3 col-xl-6 col-sm-12 border-0 costum-service-header">
              <div className="card-header fs-4 border-0 bg-transparent costum-services-header same-property-sub-heading-page-hero">
                SERVICES
              </div>
              <div className="card-body card-custom-body">
                <h2 className="card-title card-costum-title costum-page-service-title">
                  Services We Offer To Achieve Your Business Goals
                </h2>
                <p className=" fs-5 costum-hero-page-para">
                  We are Achiever! Provide services from Salesforce to Game
                  Development. Whether it is Web Development, Digital Marketing,
                  SEO Development, or a Payment Gateway for your business. We
                  are here at your service.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 my-xl-5 my-sm-1">
              <a href="/service">
                <button
                  type="button"
                  className="costum-btn float-xl-end services_sec_btn_all_services"
                >
                  See All Services
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Lower Div */}
      <div className="lowerDiv container-fluid">
        <div className="container">
          <div className="row">
            {serviceArrayData.map((data) => {
              return (
                <ServiceCard
                  id={data.id}
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePageServices;
