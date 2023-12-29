import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CareerHeader from "../components/CareerHeader";
import CareerSec from "../components/CareerSec";
import Footer from "../components/Footer";
import "./css/career.css";
import { setMetadata } from "../MetaData";
// Start Function
const Career = () => {
  setMetadata("career");
  useEffect(() => {
    document.title = "Career"; // Set the title when the component mounts
    return () => {
      // Optionally reset the title when the component unmounts
      document.title =
        " Achiever Cloud Solution: Mobile App & Game Development Company"; // Set your default title here
    };
  }, []);
  return (
    <div className="career-screen-sec">
      <Navbar />
      <CareerHeader />
      <CareerSec />
      <Footer />
    </div>
  );
};

export default Career;
