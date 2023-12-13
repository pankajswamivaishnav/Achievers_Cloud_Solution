import React from "react";
import Navbar from "../components/Navbar";
import ServiceHeader from "../components/ServiceHeader";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import ContactSec from "../components/ContactSec";
import Footer from "../components/Footer";
import Why from "../components/Why";

// Start Function
const Service = () => {
  return (
    <section className="service-section">
      <Navbar />
      <ServiceHeader
        service="All Services"
        heading="We Are Provide These Are All Services"
      />
      <Services />
      <Testimonial />
      <Why />
      <ContactSec />
      <Footer />
    </section>
  );
};

export default Service;
