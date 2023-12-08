import React from "react";
import "./css/errorpage.css";
import errorImg from "../components/images/404-img.png";

// Start Function
const ErrorPage = () => {
  return (
    <section className="page_404">
      <div className="container-fluid">
        <div className="container costum-error-page-container">
          <div className="row">
            <div className="col-xl-6 costum-error-page1">
              <div className="text-center costum-error-page-details">
                <img src={errorImg} alt="error-img" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-6 costum-error-page">
              <div className="text-center costum-error-page-details">
                <h1>Page Not Found</h1>
                <a href="/">
                  <button>GO BACK</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
