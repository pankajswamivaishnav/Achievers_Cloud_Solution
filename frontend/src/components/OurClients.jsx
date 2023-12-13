import React from "react";
import "./css/ourClients.css";
import zerodha from "./images/zerodha.png";
import dominoz from "./images/dominoz.png";
import tata from "./images/tata.png";
import zoho from "./images/zoho.png";
const OurClients = () => {
  return (
    <section className="our-clients-sec">
      <div className="container-fluid">
        <div className="container our-clients-container">
          <h2 className="text-center">Our Clients</h2>
          <h3 className="text-center">
            Leading Companies Choose Us For Different Market Needs
          </h3>
          <div className="row ">
            <div className="col-xl-3 our-clients-logo">
              <img src={tata} alt="company-img" className="img-fluid pt-2" />
            </div>
            <div className="col-xl-3 our-clients-logo">
              <img src={dominoz} alt="company-img" className="img-fluid pt-2" />
            </div>
            <div className="col-xl-3 our-clients-logo">
              <img src={zerodha} alt="company-img" className="img-fluid" />
            </div>
            <div className="col-xl-3 our-clients-logo">
              <img src={zoho} alt="company-img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
