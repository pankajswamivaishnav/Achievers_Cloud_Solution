import React from "react";
import "./css/faq.css";
const Faq = () => {
  return (
    <div className="faq-sec">
      <div className="container-xl">
        <h5 className="about-team-heading text-center">FAQS</h5>
        <h2 className="text-center">Frequently ASked Question</h2>
        <div className="main-details-divs d-xl-flex d-md-flex ">
          <div className="col-xl-6">
            <div className="row faq-details-row">
              <div className="col-xl-12 details-main">
                <details className="faq-details">
                  <summary>why Choose Costumers With Us ?</summary>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, consectetur atque. Eaque totam accusamus quisquam
                    soluta consequuntur dolores ea quasi?
                  </p>
                </details>
              </div>
              <div className="col-xl-12 details-main">
                <details className="faq-details">
                  <summary>why Choose Costumers With Us ?</summary>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, consectetur atque. Eaque totam accusamus quisquam
                    soluta consequuntur dolores ea quasi?
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
                  <summary>why Choose Costumers With Us pankaj?</summary>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, consectetur atque. Eaque totam accusamus quisquam
                    soluta consequuntur dolores ea quasi?
                  </p>
                </details>
              </div>
              <div className="col-xl-12 details-main">
                <details className="faq-details">
                  <summary>why Choose Costumers With Us ?</summary>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, consectetur atque. Eaque totam accusamus quisquam
                    soluta consequuntur dolores ea quasi?
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
