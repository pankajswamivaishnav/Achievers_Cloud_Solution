import React from "react";
import "./css/pagehero.css";
import heroImg from "./images/hero-img.png";
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
                  <h3 className="card-title card-costum-title costum-page-hero-title">
                    Providing The Best <br /> Services & IT &nbsp;
                    <span className="wave-underline">Solutions</span>
                  </h3>
                  <p className="card-text pt-2 costum-hero-page-para">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content the card title and make up
                    the card title and make up title and mak Make Up.
                  </p>
                  <a href="/contact-us" className="btn-link">
                    <button
                      to="/contact-us"
                      type="button"
                      className="costum-btn"
                    >
                      Get In Touch
                    </button>
                  </a>
                  {/* <button
                      type="button"
                      className="btn btn-outline costum-btn"
                    >
                      <a href="/contact-us" className="btn-link">
                        Get In Touch
                      </a>
                    </button> */}
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
