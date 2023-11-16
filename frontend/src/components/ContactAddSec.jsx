import React from "react";
import officeImg from "../components/images/office-img.avif";
import "./css/contactaddsec.css";
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
                  <h2 className="">Address</h2>
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-2x fa-location-dot px-3 py-1"></i>
                    <p className="pt-1 costum-contact-add-sec-para">
                      Vaishali Nagar, Chitrkoot, Jaipur
                    </p>
                  </div>
                </div>
                <div className="col-xl-12 text-center">
                  <h2 className="">Our-Email</h2>
                  <div className="d-flex justify-content-center">
                    <i class="fa-regular fa-2x fa-envelope px-3 py-2"></i>
                    <p className="pt-1 pe-2 costum-contact-add-sec-para">
                      <a href="mailto:youremail@example.com">
                        youremail@example.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-12 fa-2x text-center">
                  <h2 className="">Phone</h2>
                  <div className="d-flex justify-content-center">
                    <i class="fa-solid fa-phone pe-3 py-2"></i>
                    <p className="pe-5 costum-contact-add-sec-number">
                      0000000000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAddSec;
