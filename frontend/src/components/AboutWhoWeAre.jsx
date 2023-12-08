import React from "react";
import "./css/aboutwhoweare.css";

// Start Function
const AboutWhoWeAre = () => {
  return (
    <section className="who-we-are-sec">
      <div className="container-fluid ">
        <div className="container cotum-who-we-are-container">
          <div className="row costum-who-we-are-row">
            {/* Left Part */}
            <div className="col-xl-6 col-lg-6">
              <div className="col-xl-12">
                <h2 className="who-we-are-heading">Who We Are</h2>
              </div>
              <div className="col-xl-12">
                <p className="who-we-are-para">
                  At Achiever Cloud Solutions, we are a vibrant team of tech
                  enthusiasts and innovators, united by a shared passion for
                  transforming the digital landscape. Our company is built on
                  the foundation of expertise, creativity, and a deep
                  understanding of the ever-evolving world of technology. Our
                  diverse group comprises Salesforce specialists, cloud
                  computing experts, digital marketing strategists, adept web
                  developers, and imaginative game developers. Together, we form
                  a powerhouse of talent, driven by a commitment to excellence
                  and a relentless pursuit of client success. <br />
                  <br />
                  Our ethos is rooted in a client-centric approach, where each
                  project is an opportunity to forge lasting partnerships and
                  deliver tailor-made solutions. We thrive in an environment of
                  open communication and collaborative synergy, ensuring that
                  our solutions are not just technologically advanced but also
                  aligned with the unique needs and goals of our clients. As we
                  look towards the future, our vision is clear – to be at the
                  forefront of IT innovation, continuously adapting and
                  evolving, to empower businesses around the globe with
                  cutting-edge, practical, and impactful solutions. At Achiever
                  Cloud Solutions, we don't just deliver services; we build
                  pathways to success.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <img
                src="https://img.freepik.com/free-vector/illustration-business-people_53876-44041.jpg?w=740&t=st=1700549246~exp=1700549846~hmac=93717b878b5846f61ecaf2af9d3f6a02278e3d235604415e4cc0219210653be3"
                alt="random-img"
                className="img-fluid who-we-are-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
