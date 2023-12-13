import React from "react";
import "./css/footer.css";
import companyLogo from "./images/achiever-logo.png";

// Start Function
const Footer = () => {
  return (
    <section className="costum-footer-sec">
      <section className="footer_sec">
        {/* Footer */}
        <div className="container ">
          <footer className="text-center text-lg-start bg-light text-muted footer">
            {/* Section: Social media */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              {/* Left */}
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
              {/* Left */}
              {/* Right */}
              <div>
                {/* Section: Social media */}
                <section>
                  {/* Facebook */}

                  <a
                    className="btn text-white btn-floating m-1 footer-social-icon"
                    style={{ backgroundColor: "#1877f2" }}
                    href="https://www.facebook.com/profile.php?id=100073330762098"
                    role="button"
                  >
                    <i className="fab fa-facebook fa-lg" />
                  </a>
                  {/* Twitter */}
                  <a
                    className="btn text-white btn-floating m-1 footer-social-icon"
                    style={{ backgroundColor: "#fff" }}
                    href="https://twitter.com/AchieverCloud"
                    role="button"
                  >
                    {/* <i className="fab fa-twitter" /> */}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/450px-X_logo_2023_original.svg.png"
                      alt="x"
                      className="img-fluid"
                    />
                  </a>
                  {/* Instagram */}
                  <a
                    className="btn text-white btn-floating m-1 footer-social-icon"
                    style={{
                      background:
                        "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",

                      filter:
                        "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 ) ",
                    }}
                    href="https://www.instagram.com/achievercloud/"
                    role="button"
                  >
                    <i className="fab fa-instagram fa-lg" />
                  </a>
                  {/* Linkedin */}
                  <a
                    className="btn text-white btn-floating m-1 footer-social-icon"
                    style={{ backgroundColor: "rgb(10, 102, 194)" }}
                    href="https://www.instagram.com/achievercloudsolution/"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in fa-lg" />
                  </a>
                </section>
                {/* Section: Social media */}
              </div>
              {/* Right */}
            </section>
            {/* Section: Links  */}
            <section className>
              <div className="container text-center text-md-start mt-5">
                {/* Grid row */}
                <div className="row mt-3">
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-4 mt-3 col-xl-3 mx-auto mb-4">
                    {/* Content */}
                    <div className="footer-logo">
                      <img src={companyLogo} alt="Achiever Cloud Solution" />
                    </div>

                    <p className="mt-4">
                      Achiever Cloud Solution: Elevating Your Salesforce Journey
                      with Expertise in Web & Game Development, and Digital
                      Marketing Excellence.
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                    <p>
                      <a
                        href="/Salesforce/4"
                        className="text-reset text-decoration-none"
                      >
                        Salesforce
                      </a>
                    </p>
                    <p>
                      <a
                        href="/Web-Development/1"
                        className="text-reset text-decoration-none"
                      >
                        Web Development
                      </a>
                    </p>
                    <p>
                      <a
                        href="/Game-Development/3"
                        className="text-reset text-decoration-none"
                      >
                        Game Development
                      </a>
                    </p>
                    <p>
                      <a
                        href="/Digital-Marketing/2"
                        className="text-reset text-decoration-none"
                      >
                        Digital Marketing
                      </a>
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
                    <p>
                      <a
                        href="/about-us"
                        className="text-reset text-decoration-none"
                      >
                        About us
                      </a>
                    </p>
                    <p>
                      <a
                        href="/contact-us"
                        className="text-reset text-decoration-none"
                      >
                        Contact us
                      </a>
                    </p>
                    <p>
                      <a
                        href="/careers"
                        className="text-reset text-decoration-none"
                      >
                        Career
                      </a>
                    </p>
                    <p>
                      <a
                        href="/privacy&policies"
                        className="text-reset text-decoration-none"
                      >
                        Privacy & Policies
                      </a>
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <i className="fas fa-home me-3" /> Jaipur, Vaishali
                      302021, Bharat
                    </p>
                    <p>
                      <i className="fas fa-envelope me-3" />
                      <a href="mailto:info@fantasykhiladi.com">
                        info@fantasykhiladi.com
                      </a>
                    </p>
                    <p>
                      <i className="fas fa-phone me-3" /> +91 76653 00111
                    </p>
                    <p>
                      <i className="fas fa-print me-3" /> +91 7014578646
                    </p>
                  </div>
                  {/* Grid column */}
                </div>
                {/* Grid row */}
              </div>
            </section>
            {/* Copyright */}
            <div className="text-center p-4">
              Created By : &nbsp;
              <a
                className="text-resetfw-bold developer-name"
                href="https://www.linkedin.com/in/pankaj-swami-vaishnav/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pankaj Swami Vaishnav
              </a>
            </div>
          </footer>
        </div>
      </section>
    </section>
  );
};
export default Footer;
