import React from "react";
// React Router Dom
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ServiceHeader from "../components/ServiceHeader";
import SingleServiceSec from "../components/SingleServiceSec";
import Footer from "../components/Footer";
// import SingleServicePart1 from "../components/SingleServicePart1";
import Cta from "../components/Cta";
import SolutionStrategy from "../components/SolutionStrategy";
import singleServiceData from "../components/temp_data/singleServiceData";
import SinglePageServices from "../components/SinglePageServices";
import KeyStages from "../components/KeyStages";

const SingleServicePage2 = () => {
  const { id } = useParams();
  // Get Single Data
  const selectedService = singleServiceData.find(
    (service) => service.id === id
  );
  return (
    <section className="single-service-page">
      <Navbar />
      <ServiceHeader
        heading={selectedService.title}
        service={selectedService.service}
      />
      {/* <SingleServicePart1 /> */}
      <SinglePageServices />
      <Cta />
      <SolutionStrategy />
      <KeyStages />
      <SingleServiceSec
        id={selectedService.id}
        title={selectedService.title}
        content={selectedService.content}
        imgSrc1={selectedService.imgSrc1}
        imgSrc2={selectedService.imgSrc2}
        imgSrc3={selectedService.imgSrc3}
      />
      <Footer />
    </section>
  );
};

export default SingleServicePage2;
