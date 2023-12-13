import React from "react";
import "./css/contactsec.css";

// Start Function
const ContactSec = () => {
  return (
    <section className="contact-sec">
      <div className="container-fluid costum-conatctsec-fluid">
        <div className="container costum-contact-sec">
          <div className="costum-contactsec-container-child-div">
            <div className="text-center conatctsec-heading">CONTACT US</div>
            <h2 className="text-center contactsec-sub-heading">
              Get In Touch With Us
            </h2>
            <p className="text-center contact-sec-content fw-semibold">
              Ready to elevate your digital presence? Connect with our expert
              team now for innovative web, mobile, and game development
              solutions tailored to your needs
            </p>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-outline-primary costum-btn"
              >
                <a href="/"> Contact Us </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSec;
