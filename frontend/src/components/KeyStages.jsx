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

  // heading and Content
  function findData(heading) {
    if (heading === "Web-Development") {
      setData({
        heading:
          "Crafting Digital Excellence: Key Stages of Our Web Development Process",
        content:
          "Achiever Cloud Solution: Transforming Visions into Digital Realities. Our streamlined process ensures precision and expertise from concept to launch",
      });
    } else if (heading === "Digital-Marketing") {
      setData({
        heading:
          "Crafting Digital Excellence: Key Stages of Our Digital Marketing Process",
        content:
          "Achiever Cloud Solution's Digital Marketing Services: Elevating brands through strategic Market Research and Analysis, engaging Content Strategy and Creation, effective SEO and SEM practices, impactful Social Media Management, targeted Email Marketing Campaigns, and insightful Analytics and Reporting. Transform your digital vision into reality with our precision and expertise, guiding you from concept to successful launch.",
      });
    } else if (heading === "Game-Development") {
      setData({
        heading:
          "Mastering Game Creation: Core Phases of Our Game Development Journey",
        content:
          "Achiever Cloud Solution: Turning Gaming Fantasies into Digital Triumphs. We meticulously guide each project from initial idea through to an exhilarating launch, ensuring every game is a masterpiece of innovation and engagement",
      });
    } else if (heading === "Salesforce") {
      setData({
        heading:
          "Transforming Business with Salesforce: Achiever Cloud Solution's Salesforce Journey",
        content:
          "Achiever Cloud Solution's Salesforce Expertise: Streamlining business operations through meticulous Salesforce Implementation, tailored Customization and Configuration, seamless Integration with Existing Systems, comprehensive Training and Support, and reliable Salesforce Maintenance. Revolutionize your business processes with our proficiency, ensuring success from implementation to ongoing support.",
      });
    } else if (heading === "Payment-Gateway") {
      setData({
        heading:
          "Streamlining Financial Solutions: Essential Steps in Our Payment Gateway Development",
        content:
          "Achiever Cloud Solution: Revolutionizing Digital Transactions. Our meticulous development process guarantees accuracy and proficiency, seamlessly transitioning from initial analysis to successful deployment.",
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
    // Find data based on current URL
    findServiceByTitle(desiredContent);
    findData(desiredContent);
  }, [location]);

  return (
    <section className="key-stages-sec">
      <div className="container-fluid">
        <div className="container ">
          <h2 className="text-center">
            {/* Crafting Digital Excellence: Key Stages of Our Web Development
            Process */}
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
              <KeyStagesCard service={service} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionStrategy;
