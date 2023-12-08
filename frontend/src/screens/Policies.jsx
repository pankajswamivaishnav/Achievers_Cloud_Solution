import React from "react";
import Navbar from "../components/Navbar";
import PoliciesHeader from "../components/PoliciesHeader";
import PoliciesSec from "../components/PoliciesSec";
import Footer from "../components/Footer";

// Start Function
const Policies = () => {
  return (
    <div className="policies-sec">
      <Navbar />
      <PoliciesHeader />
      <PoliciesSec />
      <Footer />
    </div>
  );
};

export default Policies;
