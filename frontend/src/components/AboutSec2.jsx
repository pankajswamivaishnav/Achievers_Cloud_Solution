import React from "react";
import "./css/aboutsec2.css";
import dataArray from "./temp_data/journeyData";
//Journey Sub Component
import { Component1, Component2 } from "./shared/AboutOurJourney";
const AboutSec2 = () => {
  return (
    <section className="about-costum-sec">
      <div className="container-fluid about-sec2">
        <div className="container">
          <div className="row">
            {/* Left Part */}
            <div className="col-xl-6 col-md-12 col-sm-12">
              <div>
                <h2 className="about-sec2-heading">Achiever Cloud Solutions</h2>
                <h3 className="text-white">
                  We are Achiever Cloud Solutions - Your Success is Our
                  Achievement.
                </h3>
                <p className="about-sec2-para">
                  Welcome to Achiever Cloud Solutions, where innovation meets
                  expertise in the dynamic world of IT solutions. Established in
                  2021, we have rapidly emerged as a beacon of excellence in a
                  range of specialized services, catering to diverse needs in
                  the digital landscape. <br />
                  At Achiever Cloud Solutions, we are driven by a singular
                  vision - to empower businesses with cutting-edge technology
                  and tailor-made solutions. Our journey began with a commitment
                  to excellence and a passion for enabling success in the
                  digital era. Today, we stand proud as a comprehensive provider
                  of a wide array of services, including Salesforce, Cloud
                  Solutions, Payment Gateway integration, Digital Marketing, Web
                  Development, and Game Development.
                  <br />
                  <br />
                  <h3 className="text-white">Our Commitment :</h3>
                  At Achiever Cloud Solutions, we believe in forging lasting
                  relationships with our clients. Our team of dedicated
                  professionals is committed to delivering excellence and
                  innovation in every project. We understand that each business
                  is unique, and we strive to offer personalized solutions that
                  align with your specific goals and challenges.
                  <br />
                  <br />
                  <h3 className="text-white">Our Vision:</h3>
                  Our vision is to be at the forefront of technological
                  advancements, continuously evolving and adapting to the
                  ever-changing digital landscape. We aim to be the go-to
                  partner for businesses worldwide, helping them navigate the
                  complexities of technology with ease and confidence.
                  <br />
                  <br />
                  <h3 className="text-white">
                    Join Us on Your Digital Journey :
                  </h3>
                  Whether you're looking to enhance your customer relationship
                  management with Salesforce, develop a cutting-edge website,
                  launch a digital marketing campaign, integrate a seamless
                  payment gateway, or bring a game concept to life, Achiever
                  Cloud Solutions is here to turn your vision into reality. Let
                  us be your partner in this digital journey, navigating the
                  challenges and celebrating the successes together.
                </p>
              </div>
            </div>
            {/* Right Part */}
            <div className="col-xl-6 col-md-12 col-sm-12 text-center ">
              <div className="journey-sec">
                <h2 className="joruney-heading">Our Journey</h2>
                <Component1 year={dataArray[0].year} text={dataArray[0].text} />
                <Component2 year={dataArray[1].year} text={dataArray[1].text} />
                <Component1 year={dataArray[2].year} text={dataArray[2].text} />
                <Component2 year={dataArray[3].year} text={dataArray[3].text} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec2;
