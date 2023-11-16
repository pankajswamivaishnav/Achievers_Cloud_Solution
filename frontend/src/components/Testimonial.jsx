import React from "react";
import "./css/testimonial.css";
import testimonialData from "./temp_data/testimonial";
import TestimonialItem from "./shared/TestimonialItem";
const Testimonial = () => {
  return (
    <section className="testimonial_sec">
      <div className="container-fluid costum-testimonial">
        <div className="container">
          <div className="m-5">
            <div className="card-header text-center fs-4 border-0 bg-transparent special_text_color same-property-sub-heading-page-hero">
              TESTIMONIALS
            </div>
            <h3 className=" text-center costum-page-testimonial-title">
              Customers Testimonials
            </h3>
          </div>
          <div className="costum-carousel">
            {/* Carousel wrapper */}
            <div
              id="carouselExampleControls"
              className="carousel slide text-center carousel-dark"
              data-mdb-ride="carousel"
            >
              <div className="carousel-inner">
                {testimonialData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <TestimonialItem
                        name={data.name}
                        imgsrc={data.imgsrc}
                        position={data.position}
                        content={data.content}
                      />
                    </div>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev "
                type="button"
                data-mdb-target="#carouselExampleControls"
                data-mdb-slide="prev"
              >
                <span
                  className="fa-solid fa-arrow-left fa-xl"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-mdb-target="#carouselExampleControls"
                data-mdb-slide="next"
              >
                <span
                  className="fa-solid fa-arrow-right fa-xl"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* Carousel wrapper */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
