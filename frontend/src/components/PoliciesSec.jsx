import React from "react";
import "./css/policiesSec.css";

// Start Function
const PoliciesSec = () => {
  return (
    <section className="policies-sec-section">
      <div className="container-fluid">
        <div className="container">
          <h2>Privacy Policy</h2>
          {/* Part 1 */}
          <div>
            <p>
              <b>Introduction </b>
              Welcome to Achiever Cloud IT Solution. We are dedicated to
              safeguarding your personal information and your right to privacy.
              This Privacy Policy explains how we collect, use, and handle
              information when you visit our website or use our services.
            </p>
          </div>
          {/* Part 2 */}
          <div>
            <h3>Infromation We Collect</h3>
            <ol>
              <li>
                <b>Personal Information: </b> This includes details you provide
                us, such as your name, email address, and contact information,
                primarily collected when you sign up for our services, subscribe
                to our newsletter, or interact with our customer support.
              </li>
              <li>
                <b>Usage Data: </b> Information on how you access and use our
                services, including your browsing behavior, pages visited, and
                interactions with our site.
              </li>
              <li>
                <b>Technical Data: </b> This may include your IP address,
                browser type, and version, operating system, and device
                information.
              </li>
            </ol>
          </div>
          {/* Part 3 */}
          <div>
            <h3>How We Use Your Information</h3>
            <ol>
              <li>To provide, operate, and maintain our services.</li>
              <li>
                To improve and personalize your experience on our website.
              </li>
              <li>For customer communication and support.</li>
              <li>To ensure the security of our website.</li>
              <li>For compliance with legal obligations.</li>
            </ol>
          </div>
          {/* Part 4 */}
          <div>
            <p>
              <b>Sharing Your Information</b> We do not sell, trade, or rent
              your personal information to others. We may share generic
              aggregated demographic information not linked to any personal
              identification information with our business partners, trusted
              affiliates, and advertisers for the purposes outlined above.
            </p>
            <p>
              <b>Security of Your Data</b> We adopt appropriate data collection,
              storage, processing practices, and security measures to protect
              against unauthorized access, alteration, disclosure, or
              destruction of your personal information.
            </p>
            <p>
              <b>Your Privacy Rights</b> You have the right to access, edit, or
              delete your personal information. If you wish to exercise these
              rights, please contact us.
            </p>
            <p>
              <b>Changes to This Privacy Policy</b> Achiever Cloud IT Solution
              reserves the right to update this privacy policy at any time. When
              we do, we will revise the updated date at the top of this page. We
              encourage users to frequently check this page for any changes.
            </p>
            <p>
              <b>Contact Us</b> If you have any questions about this Privacy
              Policy, the practices of this site, or your dealings with this
              site, please contact us at
              <a href="mailto:info@fantasykhiladi.com"> Email Us</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliciesSec;
