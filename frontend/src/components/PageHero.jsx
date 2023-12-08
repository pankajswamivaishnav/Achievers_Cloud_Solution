import React from "react";
import "./css/pagehero.css";
import heroImg from "./images/hero-img.png";

// Start Function
const PageHero = () => {
  return (
    <section className="hero-section">
      <section className="hero_sec">
        <div className="container">
          {/* <div className=""> */}
          <div className="row">
            {/* Info left Part */}
            <div className=" col-xl-6 col-md-12 col-sm-12">
              <div className="card border-0 costum-hero-page-container">
                <div className="card-header fs-4 border-0 bg-transparent special_text_color same-property-sub-heading-page-hero">
                  IT SOLUTIONS
                </div>
                <div className="card-body card-custom-body">
                  <h1 className="card-title costum-page-hero-title">
                    Providing The Best <br />
                    Services & IT
                    <span className="wave-underline"> Solutions</span>
                  </h1>
                  <p className="card-text pt-2 costum-hero-page-para">
                    Helps you To Achieve the Best Salesforce and Cloud Services
                    For Your Business
                  </p>
                  <a href="/contact-us" className="btn-link">
                    <button type="button" className="costum-btn">
                      Get In Touch
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Right image part */}
            <div className=" col-xl-4  col-md-7 col-sm-12 mx-md-auto image-container">
              <img src={heroImg} alt="hero-img" className="img-fluid" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default PageHero;
