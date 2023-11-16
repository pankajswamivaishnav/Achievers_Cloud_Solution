import React from "react";
import "./css/contactsec.css";
const ContactSec = () => {
  return (
    <section className="contact-sec">
      <div className="container-fluid costum-conatctsec-fluid">
        <div className="container costum-contact-sec">
          <div className="costum-contactsec-container-child-div">
            <h5 className="text-center conatctsec-heading">CONTACT US</h5>
            <h1 className="text-center contactsec-sub-heading">
              Get In Touch With Us
            </h1>
            <p className="text-center contact-sec-content fw-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              dolorum voluptates ipsum necessitatibus laudantium deserunt?
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
