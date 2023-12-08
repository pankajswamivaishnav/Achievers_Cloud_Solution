import React from "react";
import Navbar from "../components/Navbar";
import CareerHeader from "../components/CareerHeader";
import CareerSec from "../components/CareerSec";
import Footer from "../components/Footer";
import "./css/career.css";

// Start Function
const Career = () => {
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
