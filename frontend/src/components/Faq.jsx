import React from "react";
import "./css/faq.css";

// Start Function
const Faq = () => {
  return (
    <div className="faq-sec">
      <div className="container-xl">
        <div className="about-team-heading text-center">FAQS</div>
        <h2 className="text-center">Frequently ASked Question</h2>
        <div className="main-details-divs d-xl-flex d-md-flex ">
          <div className="col-xl-6">
            <div className="row faq-details-row">
              <div className="col-xl-12 details-main">
                <details className="faq-details">
                  <summary className="faq-summary">
                    What range of services does Achiever Cloud Solutions offer ?
                  </summary>
                  <p>
                    Achiever Cloud Solutions specializes in a wide array of IT
                    services, including Salesforce implementation and
                    customization, comprehensive cloud solutions, secure payment
                    gateway integration, strategic digital marketing, innovative
                    web development, and engaging game development. Our
                    expertise is designed to cater to the diverse needs of
                    modern businesses, ensuring that we can support your
                    company's growth in various aspects of digital
                    transformation.
                  </p>
                </details>
              </div>
              <div className="col-xl-12 details-main">
                <details className="faq-details">
                  <summary className="faq-summary">
                    Can Achiever Cloud Solutions provide customized solutions
                    for my business ?
                  </summary>
                  <p>
                    Absolutely! We understand that each business has unique
                    challenges and requirements. Our approach involves working
                    closely with you to understand your specific business needs
                    and objectives. Based on this understanding, we tailor our
                    services and develop customized solutions that align with
                    your business goals and provide a competitive edge in your
                    industry.
                  </p>
                </details>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="col-xl-6">
            <div className="row faq-details-row">
              <div className="col-xl-12 details-main">
                <details className="faq-details">
                  <summary className="faq-summary">
                    What makes Achiever Cloud Solutions different from other IT
                    service providers ?
                  </summary>
                  <p>
                    What sets us apart is our holistic approach to technology
                    solutions and our commitment to client success. We don't
                    just offer services; we strive to build lasting partnerships
                    with our clients. Our team is not only technically
                    proficient but also deeply committed to understanding and
                    addressing the specific challenges and opportunities your
                    business faces. Additionally, our adaptability and
                    forward-thinking mindset enable us to stay ahead of the
                    curve in a rapidly evolving digital landscape, ensuring that
                    our clients always have access to the latest and most
                    effective technology solutions.
                  </p>
                </details>
              </div>
              <div className="col-xl-12 details-main">
                <details className="faq-details">
                  <summary className="faq-summary">
                    How does Achiever Cloud Solutions ensure the quality and
                    reliability of its services ?
                  </summary>
                  <p>
                    Quality and reliability are at the core of everything we do
                    at Achiever Cloud Solutions. We have a rigorous quality
                    assurance process that includes thorough testing and
                    validation of our solutions. Our team comprises industry
                    experts who stay abreast of the latest technological
                    advancements and best practices. We also maintain open and
                    continuous communication with our clients throughout the
                    project lifecycle to ensure that our solutions meet their
                    expectations and needs.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
