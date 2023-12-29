import React, { useEffect, useState } from "react";
// React Router Dom

// import { useParams, useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import ServiceHeader from "../components/ServiceHeader";
import SingleServiceSec from "../components/SingleServiceSec";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import SolutionStrategy from "../components/SolutionStrategy";
import singleServiceData from "../components/temp_data/singleServiceData";
import SinglePageServices from "../components/SinglePageServices";
import KeyStages from "../components/KeyStages";
import TopCompany from "../components/TopCompany";
import OurClients from "../components/OurClients";
import ContactForm from "../components/ContactForm";
import { setMetadata } from "../MetaData";
// Start Function
const SingleServicePage2 = () => {
  // const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState();
  // Get Single Data
  // const selectedService = singleServiceData.find(
  //   (service) => service.id === id
  // );
  const selectedService = singleServiceData.find(
    (service) => service.heading === data
  );

  function setMeta(data) {
    switch (data) {
      case "web-development":
        setMetadata("webDevelopment");
        break;
      case "game-development":
        setMetadata("gameDevelopment");
        break;
      case "digitalMarketing":
        setMetadata("digitalMarketing");
        break;
      case "salesforce":
        setMetadata("salesforce");
        break;
      case "payment-gateway":
        setMetadata("paymentGateway");
        break;
      default:
        // Handle cases where data doesn't match any specific service
        break;
    }
  }

  useEffect(() => {
    // Get the current URL from the location object
    const { pathname, search, hash } = location;
    const url = `${pathname}${search}${hash}`;
    const segments = url.split("/");
    const desiredContent = segments[1];
    setData(desiredContent);
    setMeta(desiredContent);
  }, [location]);

  return (
    <section className="single-service-page">
      <Navbar />
      <ServiceHeader
        heading={selectedService.title}
        service={selectedService.service}
      />
      <SinglePageServices />
      <Cta />
      <SolutionStrategy />
      <KeyStages />
      <OurClients />
      <SingleServiceSec
        id={selectedService.id}
        title={selectedService.title}
        content={selectedService.content}
        imgSrc1={selectedService.imgSrc1}
        imgSrc2={selectedService.imgSrc2}
        imgSrc3={selectedService.imgSrc3}
      />
      <TopCompany />
      <ContactForm />
      <Footer />
    </section>
  );
};

export default SingleServicePage2;
