import React from "react";
import Navbar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Services from "../components/Services";
import Why from "../components/Why";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import "./css/home.css";
const Home = () => {
  return (
    <section className="home_sec">
      <div className="costum_home_sec space stars1 main">
        <Navbar />
        <PageHero />
        <Services />
        <Why />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
