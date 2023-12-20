import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactHeader from "../components/ContactHeader";
import ContactAddSec from "../components/ContactAddSec";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// Start Function
const Contact = () => {
  useEffect(() => {
    document.title = "Contact-Us"; // Set the title when the component mounts
    return () => {
      // Optionally reset the title when the component unmounts
      document.title =
        " Achiever Cloud Solution: Mobile App & Game Development Company"; // Set your default title here
    };
  }, []);
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactAddSec />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
