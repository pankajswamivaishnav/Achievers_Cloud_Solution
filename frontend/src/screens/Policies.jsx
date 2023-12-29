import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import PoliciesHeader from "../components/PoliciesHeader";
import PoliciesSec from "../components/PoliciesSec";
import Footer from "../components/Footer";
import { setMetadata } from "../MetaData";
// Start Function
const Policies = () => {
  setMetadata("privacyPolicy");
  useEffect(() => {
    document.title = "Privacy & Policies"; // Set the title when the component mounts
    return () => {
      // Optionally reset the title when the component unmounts
      document.title =
        " Achiever Cloud Solution: Mobile App & Game Development Company"; // Set your default title here
    };
  }, []);
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
