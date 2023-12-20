import React, { useEffect } from "react";
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
  useEffect(() => {
    document.title = "About-Us"; // Set the title when the component mounts
    return () => {
      // Optionally reset the title when the component unmounts
      document.title =
        " Achiever Cloud Solution: Mobile App & Game Development Company"; // Set your default title here
    };
  }, []);
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
