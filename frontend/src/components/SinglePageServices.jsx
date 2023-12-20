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
      // case "Web-Development":
      case "web-development":
        serviceArray = webDevelopment;
        break;
      case "digital-marketing":
        serviceArray = digitalMarketing;
        break;
      case "game-development":
        serviceArray = gameDevelopment;
        break;
      case "salesforce":
        serviceArray = salesforce;
        break;
      case "payment-gateway":
        serviceArray = paymentGateway;
        break;
      default:
        serviceArray = [];
    }
    setServiceArray(serviceArray);
  }

  // Hooks
  const [data, setData] = useState({
    heading: "",
    content: "",
  });

  // Heading And Content
  function findData(heading) {
    if (heading === "web-development") {
      setData({
        heading: "Driven Technologies: Achiever Cloud Solution's Strategy",
        content:
          "Achiever Cloud Solution: Transforming Visions into Digital Realities. Our streamlined process ensures precision and expertise from concept to launch",
      });
    } else if (heading === "digital-marketing") {
      setData({
        heading:
          "Digital Marketing Strategies: Achiever Cloud Solution's Approach",
        content:
          "Achiever Cloud Solution employs cutting-edge digital marketing strategies to elevate your brand's online presence. Our comprehensive approach ensures precision and expertise at every step, from conceptualization to execution.",
      });
      // } else if (heading === "Game-Development") {
    } else if (heading === "game-development") {
      setData({
        heading: "Game Development Services: Elevating Your Business Goals",
        content:
          "At Achiever, our passion for Game Development drives us to create immersive and innovative gaming experiences. Specializing in everything from mobile to AR/VR games, we set new industry standards with each project",
      });
    } else if (heading === "salesforce") {
      setData({
        heading:
          "Empowering CRM: Achiever Cloud Solution's Salesforce Integration",
        content:
          "Achiever Cloud Solution: Optimizing Customer Relationships with Salesforce. Our integration services enhance CRM functionalities, leveraging Salesforce to streamline workflows and elevate customer experiences.",
      });
    } else if (heading === "payment-gateway") {
      setData({
        heading: "Payment Gateway Services at Achieve",
        content:
          "At Achiever, we specialize in providing secure and efficient Payment Gateway services, ensuring seamless financial transactions tailored to your business needs. Count on us for reliable payment solutions that elevate your business's digital transactions.",
      });
    } else {
      setData({
        heading: "",
        content: "",
      });
    }
  }

  useEffect(() => {
    // Get the current URL from the location object
    const { pathname, search, hash } = location;
    const url = `${pathname}${search}${hash}`;
    const segments = url.split("/");
    const desiredContent = segments[1];
    // setCurrentURL(desiredContent);
    findServiceByTitle(desiredContent);
    findData(desiredContent);
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
                  {/* Services We Offer To Achieve Your Business Goals */}
                  {data.heading}
                </h2>
                <p className=" fs-5 costum-hero-page-para">
                  {/* We are Achiever! Provide services from Salesforce to Game
                  Development. Whether it is Web Development, Digital Marketing,
                  SEO Development, or a Payment Gateway for your business. We
                  are here at your service. */}
                  {data.content}
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
