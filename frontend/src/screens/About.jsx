import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeader from "../components/AboutHeader";
import AboutSec2 from "../components/AboutSec2";
import AboutWhoWeAre from "../components/AboutWhoWeAre";
import TeamSec from "../components/TeamSec";
import Testimonial from "../components/Testimonial";
// import Blog from "../components/Blog";
import Faq from "../components/Faq";
import ContactSec from "../components/ContactSec";
const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutSec2 />
      <AboutWhoWeAre />
      <TeamSec />
      <Testimonial />
      {/* <Blog /> */}
      <Faq />
      <ContactSec />
      <Footer />
    </div>
  );
};

export default About;
