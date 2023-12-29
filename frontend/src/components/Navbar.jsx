import React, { useEffect } from "react";
import "./css/navbar.css";
import { addScrollListener } from "./js/navbar";
import achieverLogo from "./images/achiever-logo.png";

// Start Function
const Navbar = () => {
  // Color Change On y-axix scrolling
  useEffect(() => {
    addScrollListener();
  }, []);

  return (
    <section className="navbar_sec">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container costum-navbar-container">
          <div className="logo-div">
            <a className="navbar-brand text-white" href="/">
              <img
                src={achieverLogo}
                alt="Achiever-logo"
                className="img-fluid"
              />
            </a>
          </div>
          <button
            className="navbar-toggler costum-navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="offcanvas offcanvas-start costum-nav-main-div"
            id="navbarNav"
            tabindex="-1"
            aria-labelledby="navbarNavLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="navbarNavLabel">
                <a className="navbar-brand text-white" href="/">
                  <img
                    src={achieverLogo}
                    alt="Achiever-logo"
                    className="img-fluid costum-expand-nav"
                  />
                </a>
              </h5>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 costum-nav sidenav">
                {/* Home */}
                <li className="nav-item me-3">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                {/* About */}
                <li className="nav-item me-3">
                  <a className="nav-link" href="/about-us">
                    About
                  </a>
                </li>
                {/* Services */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle hoverable-dropdown"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu costum-dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item costum-dropdown-item"
                        href="/salesforce"
                      >
                        <i className="fas fa-mobile-alt"></i> Salesforce
                      </a>
                    </li>
                    {/* Game Development */}
                    <li>
                      <a
                        className="dropdown-item costum-dropdown-item"
                        href="/game-development"
                      >
                        <i className="fas fa-cubes"></i> Game Development
                      </a>
                    </li>
                    {/* Payment Gateway */}
                    <li>
                      <a
                        className="dropdown-item costum-dropdown-item"
                        href="/payment-gateway"
                      >
                        <i className="fas fa-search"></i> Payment Gateway
                      </a>
                    </li>
                    {/* Digital Marketing */}
                    <li>
                      <a
                        className="dropdown-item costum-dropdown-item"
                        href="/digital-marketing"
                      >
                        <i className="fas fa-chart-line"></i> Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item costum-dropdown-item"
                        // href="/Web-Development/1"
                        href="/web-development"
                      >
                        <i className="fa-solid fa-code"></i> Web Development
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Blog*/}
                <li className="nav-item me-3">
                  <a className="nav-link" href="/blogs">
                    Blog
                  </a>
                </li>
                {/* Contact */}
                <li className="nav-item me-3">
                  <a className="nav-link" href="/contact-us">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );

  // return (
  //   <section className="navbar_sec">
  //     <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary ">
  //       <div className="container costum-navbar-container">
  //         <div className="logo-div">
  //           <a className="navbar-brand text-white" href="/">
  //             <img
  //               src={achieverLogo}
  //               alt="Achiever-logo"
  //               className="img-fluid"
  //             />
  //           </a>
  //         </div>
  //         <button
  //           className="navbar-toggler costum-navbar-toggler "
  //           type="button"
  //           // data-bs-toggle="collapse"
  //           // data-bs-target="#navbarSupportedContent"
  //           // aria-controls="navbarSupportedContent"
  //           // aria-expanded="false"
  //           // aria-label="Toggle navigation"
  //           data-bs-toggle="offcanvas"
  //           data-bs-target="#navbarNav"
  //           aria-controls="navbarNav"
  //         >
  //           <span className="navbar-toggler-icon" />
  //         </button>
  //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //           <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 costum-nav sidenav">
  //             {/* Home */}
  //             <li className="nav-item me-3">
  //               <a className="nav-link" aria-current="page" href="/">
  //                 Home
  //               </a>
  //             </li>
  //             {/* About */}
  //             <li className="nav-item me-3">
  //               <a className="nav-link" href="/about-us">
  //                 About
  //               </a>
  //             </li>
  //             {/* Services */}
  //             <li className="nav-item dropdown">
  //               <a
  //                 className="nav-link dropdown-toggle hoverable-dropdown"
  //                 href="/"
  //                 role="button"
  //                 data-bs-toggle="dropdown"
  //                 aria-expanded="false"
  //               >
  //                 Services
  //               </a>
  //               <ul className="dropdown-menu costum-dropdown-menu">
  //                 <li>
  //                   <a
  //                     className="dropdown-item costum-dropdown-item"
  //                     href="/Web-Development/1"
  //                   >
  //                     <i className="fa-solid fa-code"></i> Web Development
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     className="dropdown-item costum-dropdown-item"
  //                     href="/Digital-Marketing/2"
  //                   >
  //                     <i className="fas fa-chart-line"></i> Digital Marketing
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     className="dropdown-item costum-dropdown-item"
  //                     href="/Game-Development/3"
  //                   >
  //                     <i className="fas fa-cubes"></i> Game Development
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     className="dropdown-item costum-dropdown-item"
  //                     href="/Salesforce/4"
  //                   >
  //                     <i className="fas fa-mobile-alt"></i> Salesforce
  //                   </a>
  //                 </li>
  //                 <li>
  //                   <a
  //                     className="dropdown-item costum-dropdown-item"
  //                     href="/Payment-Gateway/5"
  //                   >
  //                     <i className="fas fa-search"></i> Payment Gateway
  //                   </a>
  //                 </li>
  //               </ul>
  //             </li>
  //             {/* Blog*/}
  //             <li className="nav-item me-3">
  //               <a className="nav-link" href="/blogs">
  //                 Blog
  //               </a>
  //             </li>
  //             {/* Contact */}
  //             <li className="nav-item me-3">
  //               <a className="nav-link" href="/contact-us">
  //                 Contact Us
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </section>
  // );

  // return (
  //   <section className="navbar_sec">
  //     <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  //       <div className="container costum-navbar-container">
  //         <button
  //           className="navbar-toggler costum-navbar-toggler"
  //           type="button"
  //           data-bs-toggle="offcanvas"
  //           data-bs-target="#navbarNav"
  //           aria-controls="navbarNav"
  //         >
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <div
  //           className="offcanvas offcanvas-start"
  //           id="navbarNav"
  //           tabindex="-1"
  //           aria-labelledby="navbarNavLabel"
  //         >
  //           <div className="offcanvas-header">
  //             <h5 className="offcanvas-title" id="navbarNavLabel">
  //               Menu
  //             </h5>
  //             <button
  //               type="button"
  //               className="btn-close text-reset"
  //               data-bs-dismiss="offcanvas"
  //               aria-label="Close"
  //             ></button>
  //           </div>
  //           <div className="offcanvas-body">
  //             <ul className="navbar-nav costum-nav sidenav">
  //               {/* Home */}
  //               <li className="nav-item me-3">
  //                 <a className="nav-link" aria-current="page" href="/">
  //                   Home
  //                 </a>
  //               </li>
  //               {/* About */}
  //               <li className="nav-item me-3">
  //                 <a className="nav-link" href="/about-us">
  //                   About
  //                 </a>
  //               </li>
  //               {/* Services */}
  //               <li className="nav-item dropdown">
  //                 <a
  //                   className="nav-link dropdown-toggle hoverable-dropdown"
  //                   href="/"
  //                   role="button"
  //                   data-bs-toggle="dropdown"
  //                   aria-expanded="false"
  //                 >
  //                   Services
  //                 </a>
  //                 <ul className="dropdown-menu costum-dropdown-menu">
  //                   <li>
  //                     <a
  //                       className="dropdown-item costum-dropdown-item"
  //                       href="/Web-Development/1"
  //                     >
  //                       <i className="fa-solid fa-code"></i> Web Development
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a
  //                       className="dropdown-item costum-dropdown-item"
  //                       href="/Digital-Marketing/2"
  //                     >
  //                       <i className="fas fa-chart-line"></i> Digital Marketing
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a
  //                       className="dropdown-item costum-dropdown-item"
  //                       href="/Game-Development/3"
  //                     >
  //                       <i className="fas fa-cubes"></i> Game Development
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a
  //                       className="dropdown-item costum-dropdown-item"
  //                       href="/Salesforce/4"
  //                     >
  //                       <i className="fas fa-mobile-alt"></i> Salesforce
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a
  //                       className="dropdown-item costum-dropdown-item"
  //                       href="/Payment-Gateway/5"
  //                     >
  //                       <i className="fas fa-search"></i> Payment Gateway
  //                     </a>
  //                   </li>
  //                 </ul>
  //               </li>
  //               {/* Blog */}
  //               <li className="nav-item me-3">
  //                 <a className="nav-link" href="/blogs">
  //                   Blog
  //                 </a>
  //               </li>
  //               {/* Contact */}
  //               <li className="nav-item me-3">
  //                 <a className="nav-link" href="/contact-us">
  //                   Contact Us
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     </nav>
  //   </section>
  // );
};

export default Navbar;
