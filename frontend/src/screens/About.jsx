import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeader from "../components/AboutHeader";
import AboutSec2 from "../components/AboutSec2";
import AboutWhoWeAre from "../components/AboutWhoWeAre";
import TeamSec from "../components/TeamSec";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import ContactSec from "../components/ContactSec";

// Start Function
const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutSec2 />
      <AboutWhoWeAre />
      <TeamSec />
      <Testimonial />
      <Faq />
      <ContactSec />
      <Footer />
    </div>
  );
};

export default About;
