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
  const [data, setData] = useState({
    heading: "",
    content: "",
  });
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

  // Heading And Content
  function findData(heading) {
    if (heading === "Web-Development") {
      setData({
        heading: "Driven Technologies: Achiever Cloud Solution's Strategy",
        content:
          "Achiever Cloud Solution: Transforming Visions into Digital Realities. Our streamlined process ensures precision and expertise from concept to launch",
      });
    } else if (heading === "Digital-Marketing") {
      setData({
        heading:
          "Digital Marketing Strategies: Achiever Cloud Solution's Approach",
        content:
          "Achiever Cloud Solution employs cutting-edge digital marketing strategies to elevate your brand's online presence. Our comprehensive approach ensures precision and expertise at every step, from conceptualization to execution.",
      });
    } else if (heading === "Game-Development") {
      setData({
        heading: "Exploring Game Development: Diverse Types and Engines",
        content:
          "Different types of games can be developed using various game engines like Unity, Unreal Engine, etc. Here are some examples:",
      });
    } else if (heading === "Salesforce") {
      setData({
        heading:
          "Empowering CRM: Achiever Cloud Solution's Salesforce Integration",
        content:
          "Achiever Cloud Solution: Optimizing Customer Relationships with Salesforce. Our integration services enhance CRM functionalities, leveraging Salesforce to streamline workflows and elevate customer experiences.",
      });
    } else if (heading === "Payment-Gateway") {
      setData({
        heading:
          "Seamless Transactions: Achiever Cloud Solution's Payment Gateway Services",
        content:
          "Achiever Cloud Solution: Simplifying Payments, Amplifying Business. Our approach integrates cutting-edge technology with unparalleled ease, ensuring a secure and efficient transaction experience from start to finish.",
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
    <section className="solu-strat-sec">
      <div className="container-fluid">
        <div className="container ">
          <h2 className="text-center">
            {/* Driven Technologies: Achiever Cloud Solution's Strategy */}
            {data.heading}
          </h2>
          <p className="text-center">
            {/* Achiever Cloud Solution: Transforming Visions into Digital
            Realities. Our streamlined process ensures precision and expertise
            from concept to launch */}
            {data.content}
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
