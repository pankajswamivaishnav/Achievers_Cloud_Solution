import React from "react";
import "./css/faq.css";
import { faqData1, faqData2 } from "./temp_data/faqData";
// Start Function
const Faq = () => {
  return (
    <div className="faq-sec">
      <div className="container-xl">
        <div className="about-team-heading text-center">FAQS</div>
        <h2 className="text-center">Frequently ASked Question</h2>
        <div className="main-details-divs d-xl-flex d-md-flex ">
          <div className="col-xl-6">
            {/* first row */}
            <div className="row faq-details-row">
              {faqData1.map((data) => (
                <div className="col-xl-12 details-main">
                  <details className="faq-details">
                    <summary className="faq-summary">{data.Q}</summary>
                    <p>{data.A}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
          {/* second row */}
          <div className="col-xl-6">
            <div className="row faq-details-row">
              {faqData2.map((res) => (
                <div className="col-xl-12 details-main">
                  <details className="faq-details">
                    <summary className="faq-summary">{res.Q}</summary>
                    <p>{res.A}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
