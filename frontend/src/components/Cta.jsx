import React from "react";
import "./css/cta.css";

// Start Function
const Cta = () => {
  return (
    <section className="cta_sec">
      <div className="container-fluid">
        <div className="container cta-container">
          <div className="ctaMainDiv">
            <div className="cta-text">
              <h2 className="cta-heading">
                Ready to Elevate Your Web Presence? Let's Get Started!
              </h2>
              <p className="cta-para">
                Connect us now to hire Web Developers and bring your Web ideas
                to life !
              </p>
            </div>
            <div className="cta-btn-box">
              <a href="/contact-us">
                <button className="btn btn-info cta-btn">
                  <i class="fa-solid fa-mobile"></i>&nbsp; Connect With Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
