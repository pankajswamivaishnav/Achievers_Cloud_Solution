import React from "react";
import Navbar from "../components/Navbar";
import ContactHeader from "../components/ContactHeader";
import ContactAddSec from "../components/ContactAddSec";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// Start Function
const Contact = () => {
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
