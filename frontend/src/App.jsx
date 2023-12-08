import React from "react";
import "./app.css";
// Bootstrap Links
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// React Router Dom Links
import { Routes, Route, BrowserRouter } from "react-router-dom";
//Screens Links
import Home from "./screens/Home";
import Blogs from "./screens/Blogs";
import About from "./screens/About";
import Service from "./screens/Service";
import Contact from "./screens/Contact";
import SingleServicePage2 from "./screens/SingleServicePage2";
import Career from "./screens/Career";
import Page404 from "./screens/Page404";
import Policies from "./screens/Policies";

// Start Function
const App = () => {
  return (
    <section className="appComponentBackground">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/:title/:id" element={<SingleServicePage2 />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
