import React from "react";
import Navbar from "../components/Navbar";
import BlogHeader from "../components/BlogHeader";
import BlogMiddle from "../components/BlogMiddle";
// Component Others
import ObjectiveModule from "../components/ObjectiveModule";
import Cta2 from "../components/Cta2";
import ServiceCard2 from "../components/ServiceCard2";
import Footer from "../components/Footer";
import ServiceCard3 from "../components/ServiceCard3";

// Start Function
const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogHeader />
      <BlogMiddle />
      <Cta2 />
      <ObjectiveModule />
      <ServiceCard2 imgSrc="https://risingmax.com/assets/img/new-images/web3-realestate.webp" />
      <ServiceCard3 imgSrc="https://risingmax.com/assets/img/new-images/metaverse-technology-consulting-defi.webp" />
      <ServiceCard2 imgSrc="https://risingmax.com/assets/img/new-images/web3-game.webp" />
      <ServiceCard3 imgSrc="https://risingmax.com/assets/img/new-images/web3-mobile-app-development-ecommerce-world.webp" />

      <Footer />
    </div>
  );
};

export default Blogs;
