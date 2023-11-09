import React from "react";
import "./css/aboutsec2.css";
import dataArray from "./temp_data/journeyData";
//Journey Sub Component
import { Component1, Component2 } from "./shared/AboutOurJourney";
const AboutSec2 = () => {
  return (
    <section className="about-costum-sec">
      <div className="container-fluid about-sec2">
        <div className="container">
          <div className="row">
            {/* Left Part */}
            <div className="col-xl-6 col-md-12 col-sm-12">
              <div>
                <h1 className="about-sec2-heading">About Us</h1>
                <h4>Humble Begining. High Aspirations</h4>
                <p className="about-sec2-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium quidem recusandae corrupti excepturi, eos
                  architecto ea voluptas amet cumque ut.
                  <b> ( Aperiam quas neque accusantium ipsam )</b> Soluta
                  possimus repellat consectetur dolor tempora voluptas
                  laboriosam amet! Eveniet laborum, necessitatibus nisi unde
                  omnis vitae magnam quasi quis veritatis corporis itaque
                  numquam minima magni soluta dolores ex sit deserunt maiores
                  fugiat ipsam quae doloribus officia sapiente sequi! Ratione
                  dolore dolor suscipit obcaecati, vel eos possimus repellat
                  repudiandae sit nihil non?
                  <br />
                  <br />
                  Impedit et dolorem consectetur facere ipsa minima eos tempore?
                  Quasi quas aut asperiores non cupiditate, voluptatibus eum
                  pariatur cumque facilis nesciunt rerum ullam quia saepe
                  reprehenderit nulla consequuntur minus nostrum deleniti illo
                  optio dignissimos aspernatur alias tempora. Perspiciatis,
                  dolorum obcaecati quam quis exercitationem tempora laborum
                  vero eius aliquam optio doloremque libero ipsa itaque est
                  quaerat recusandae, aliquid iure, a officia unde et corporis
                  numquam accusamus?
                  <br />
                  <br />
                  Perferendis nemo quae cumque maxime nihil eum voluptatem
                  repudiandae natus voluptatum voluptatibus alias ullam a
                  doloribus repellat corrupti, voluptas obcaecati vitae. Veniam
                  mollitia voluptatum alias dignissimos assumenda incidunt
                  dolorem temporibus ad est perspiciatis, quibusdam deleniti
                  doloremque perferendis quae quaerat dolore hic in quia ut ea,
                  fugiat vitae expedita tempore facilis. Enim dicta repudiandae,
                  officia corporis nesciunt doloribus eaque praesentium!
                </p>
              </div>
            </div>
            {/* Right Part */}
            <div className="col-xl-6 col-md-12 col-sm-12 text-center ">
              <div className="journey-sec">
                <h1 className="joruney-heading">Our Journey</h1>
                <Component1 year={dataArray[0].year} text={dataArray[0].text} />
                <Component2 year={dataArray[1].year} text={dataArray[1].text} />
                <Component1 year={dataArray[2].year} text={dataArray[2].text} />
                <Component2 year={dataArray[3].year} text={dataArray[3].text} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec2;
