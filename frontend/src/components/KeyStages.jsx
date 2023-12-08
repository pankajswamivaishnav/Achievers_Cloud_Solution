import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import KeyStagesCard from "./shared/KeyStagesCard";
import "./css/keyStages.css";
import {
  webDevelopment,
  gameDevelopment,
  digitalMarketing,
  salesforce,
  paymentGateway,
} from "./temp_data/KeyStagesData";

// Start Function
const SolutionStrategy = () => {
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
    // Find data based on current URL
    findServiceByTitle(desiredContent);
  }, [location]);

  return (
    <section className="key-stages-sec">
      <div className="container-fluid">
        <div className="container ">
          <h2 className="text-center">
            Crafting Digital Excellence: Key Stages of Our Web Development
            Process
          </h2>
          <p className="text-center">
            Achiever Cloud Solution: Transforming Visions into Digital
            Realities. Our streamlined process ensures precision and expertise
            from concept to launch
          </p>
          <div className="row solu-strat-row">
            {serviceArrayData.map((service, index) => (
              <KeyStagesCard service={service} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionStrategy;
