import React from "react";
import heroImg from "./images/why-choose-img.png";
import "./css/why.css";
const Why = () => {
  return (
    <section className="why_sec">
      <div className="container-fluid">
        <div className="container">
          <div className="row costum-why-row">
            {/* Left Image Part */}
            <div className="col-xl-5 col-sm-12 image-container costum-why-img-container">
              <img src={heroImg} alt="hero-img" className="img-fluid" />
            </div>
            {/* Info Right Part */}
            <div className="col-xl-7 col-sm-12 costum-why-right-part">
              <div className="card border-0 costum-service-header">
                <div className="card-header fs-4 border-0 bg-transparent special_text_color ">
                  WHY CHOOSE US
                </div>
                <div className="card-body card-custom-body">
                  <h2 className="card-title card-costum-title costum-page-why-title">
                    Why Our Customers Choose
                    <span className="wave-underline"> Working </span>
                    With Us
                  </h2>
                  <p className="card-text costum-hero-page-para">
                    We Achiever believes in serving the right tools and
                    technology including Salesforce and Cloud Services, IT
                    Solutions, Gaming, and SEO development. So your business
                    skyrockets without you worked up.
                  </p>
                </div>
              </div>
              {/* First Point */}
              <div className="row mt-3 mb-3">
                <div className="col-xl-2 col-sm-12">
                  <p className="points">01.</p>
                </div>
                <div className="col-xl-10 col-sm-12">
                  <h3>Use the leading Technology including AI </h3>
                  <p className="card-text">
                    We only use the top AI technology and tools to enhance your
                    business. So it will walk along with the rapidly changing
                    and growing business world.
                  </p>
                </div>
              </div>
              {/* Second Point */}
              <div className="row mt-3 mb-3">
                <div className="col-xl-2 col-sm-12">
                  <p className="points">02.</p>
                </div>
                <div className="col-xl-10 col-sm-12">
                  <h3>Zero-Cost Salesforce CRM Consultation</h3>
                  <p className="card-text">
                    Let’s talk before you reach any decision and it's free of
                    cost. Because we only want the best for you.
                  </p>
                </div>
              </div>
              {/* Third Point */}
              <div className="row mt-3 mb-3">
                <div className="col-xl-2 col-sm-12">
                  <p className="points">03.</p>
                </div>
                <div className="col-xl-10 col-sm-12">
                  <h3>Services for every kind of industry</h3>
                  <p className="card-text">
                    With us type of industry is not an issue anymore. Whether it
                    is IT, Web, Gaming, Media, Retail, Financial, Real Estate,
                    Food, Pharmaceutics etc. You name it and achiever and its
                    team are on it to make your lives easier.
                  </p>
                </div>
              </div>
              {/* Fourth Point */}
              <div className="row mt-3 mb-3">
                <div className="col-xl-2 col-sm-12">
                  <p className="points">04.</p>
                </div>
                <div className="col-xl-10 col-sm-12">
                  <h3>Top Salesforce Services</h3>
                  <p className="card-text">
                    We’ll take care of your traditional business and take it to
                    the next level using our best Web Services. Or your
                    brand-new Start-up! we assure you, that we’ll welcome you
                    with our utmost supreme Salesforce cloud and IT services.
                  </p>
                </div>
              </div>
              {/* Fifth Point */}
              <div className="row mt-3 mb-3">
                <div className="col-xl-2 col-sm-12">
                  <p className="points">05.</p>
                </div>
                <div className="col-xl-10 col-sm-12">
                  <h3>Expert Team As Post-services</h3>
                  <p className="card-text">
                    Once you start a business with us we will give you an expert
                    team that will only focus on your business dreams and goals
                    and give you regular updates. So you don’t have to worry
                    about wondering how things are going.
                  </p>
                </div>
              </div>
              <a href="/contact-us">
                <button type="button" className="costum-btn">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
