import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/solutionStrategy.css";
import SolutionStrategyCard from "./shared/SolutionStrategyCard";
import {
  webDevelopment,
  gameDevelopment,
  digitalMarketing,
  salesforce,
  paymentGateway,
} from "./temp_data/solutionStrategy";

// Start Function
const SolutionStrategy = () => {
  const location = useLocation();
  //   const [currentURL, setCurrentURL] = useState("");
  //   const [serviceData, setServiceData] = useState(null);

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
    <section className="solu-strat-sec">
      <div className="container-fluid">
        <div className="container ">
          <h2 className="text-center">
            Driven Technologies: Achiever Cloud Solution's Strategy
          </h2>
          <p className="text-center fs-4">
            Achiever Cloud Solution: Transforming Visions into Digital
            Realities. Our streamlined process ensures precision and expertise
            from concept to launch
          </p>
          <div className="row solu-strat-row">
            {serviceArrayData.map((service, index) => (
              <SolutionStrategyCard service={service} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionStrategy;
