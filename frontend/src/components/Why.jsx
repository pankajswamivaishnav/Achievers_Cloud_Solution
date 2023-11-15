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
                  <h3 className="card-title card-costum-title costum-page-why-title">
                    Why Our Customers Choose
                    <span className="wave-underline"> Working </span>
                    With Us
                  </h3>
                  <p className="card-text costum-hero-page-para">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content the card title and make up
                    the card title and make up title and mak Make Up.
                  </p>
                </div>
              </div>
              {/* First Point */}
              <div className="row mt-3 mb-3">
                <div className="col-xl-2 col-sm-12">
                  <p className="points">01.</p>
                </div>
                <div className="col-xl-10 col-sm-12">
                  <h3>Latest Technologies</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat vitae velit laborum ipsam. Magnam placeat aut nihil,
                    quaerat voluptas blanditiis. quia.
                  </p>
                </div>
              </div>
              {/* Second Point */}
              <div className="row mt-3 mb-3">
                <div className="col-xl-2 col-sm-12">
                  <p className="points">02.</p>
                </div>
                <div className="col-xl-10 col-sm-12">
                  <h3>Uniqe Solutions</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat vitae velit laborum ipsam. Magnam placeat aut nihil,
                    quaerat voluptas blanditiis. quia.
                  </p>
                </div>
              </div>
              {/* Third Point */}
              <div className="row mt-3 mb-3">
                <div className="col-xl-2 col-sm-12">
                  <p className="points">03.</p>
                </div>
                <div className="col-xl-10 col-sm-12">
                  <h3>Powerful Stratgies</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat vitae velit laborum ipsam. Magnam placeat aut nihil,
                    quaerat voluptas blanditiis. quia.
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
