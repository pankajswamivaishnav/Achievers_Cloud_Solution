import React from "react";
import officeImg from "../components/images/office-img.jpg";
import "./css/contactaddsec.css";

// Start Function
const ContactAddSec = () => {
  return (
    <section className="contact-add-sec">
      <div className="container-fluid">
        <div className="container">
          <h2 className="text-center contact-add-sec-heading">
            Achiever Cloud IT Solution
          </h2>
          <div className="row costum-contact-add-sec-row">
            {/* Left Part */}
            <div className="col-xl-6 col-md-12 text-md-center text-sm-center mb-sm-5">
              <img
                src={officeImg}
                alt="office-img"
                className="img-fluid contact-add-sec-img"
              />
            </div>
            {/* Right Part */}
            <div className="col-xl-6 pt-xl-5 pt-md-5 col-md-12 costum-contact-addsec-rightpart">
              <div className="row">
                <div className="col-xl-12 text-center">
                  <p className="contact-add-sec-points">Address</p>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-2x fa-location-dot px-3 py-1"></i>
                    <p className="pt-1 costum-contact-add-sec-para">
                      Vaishali Nagar, Chitrkoot, Jaipur
                    </p>
                  </div>
                </div>
                <div className="col-xl-12 text-center">
                  <p className="contact-add-sec-points">Our-Email</p>
                  <div className="d-flex justify-content-center">
                    <i class="fa-regular fa-2x fa-envelope px-3 py-2"></i>
                    <p className="pt-1 pe-2 costum-contact-add-sec-para">
                      <a href="mailto:info@achievercloudsolution.com">
                        info@achievercloudsolution.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-12 fa-2x text-center">
                  <p className="contact-add-sec-points">Phone</p>
                  <div className="d-flex justify-content-center">
                    <i class="fa-solid fa-phone pe-3 py-2"></i>
                    <p className="pe-5 costum-contact-add-sec-number">
                      +91 76653 00111
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Heading */}
          <div className="costum-contactform-row1">
            <h3 className="contact-form-map-heading">Find Us On Google Maps</h3>
          </div>
          {/* Embedded Map */}
          <div className="row costum-contactform-row2">
            <div className="col-xl-12">
              <iframe
                title="achiever Cloud IT Solution"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2975098075817!2d75.77171609999999!3d26.894051599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a404a63f8f%3A0x57d4cbafe7d1f79f!2sFantasy%20Khiladi!5e0!3m2!1sen!2sin!4v1698308014834!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="acs-map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAddSec;
