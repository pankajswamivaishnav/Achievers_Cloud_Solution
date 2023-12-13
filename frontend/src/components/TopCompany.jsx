import React from "react";
import "./css/topCompany.css";
import google from "./images/google.png";
import upcity from "./images/upcity.png";
import goodfirm from "./images/goodfirm.png";
const TopCompany = () => {
  return (
    <section className="top-company-sec">
      <div className="container-fluid top-company-container-fluid">
        <div className="container">
          <div className="row top-company-row">
            <div className="col-xl-4">
              <div className="top-company-div">
                <img src={google} alt="company-img" className="img-fluid" />
                <p className="top-company-para" id="top-company-google">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                <p className="top-company-para">1050+ Reviews</p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="top-company-div">
                <img src={upcity} alt="company-img" className="img-fluid" />
                <p className="top-company-para">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                <p className="top-company-para">500+ Reviews</p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="top-company-div">
                <img src={goodfirm} alt="company-img" className="img-fluid" />
                <p className="top-company-para">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                <p className="top-company-para">700+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompany;
