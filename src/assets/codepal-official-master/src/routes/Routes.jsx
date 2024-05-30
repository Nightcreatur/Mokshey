import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/pages/Home/home/Main";
import About from "../components/pages/Home/about/About";
import Teams from "../components/pages/Home/teams/Teams";
import Navbar from "../components/pages/Home/home/Navbar";
import Footer from "../components/pages/Home/home/Footer";
import Carrer from "../components/pages/Home/carrer/Carrer";
import Blogs from "../components/pages/Home/blogs/Blogs";
import Contact from "../components/pages/Home/contact/Contact";
import Gallery from "../components/pages/gallery/Gallery";

const WebRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/team" element={<About />} />
        <Route path="/about" element={<Teams />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default WebRoutes;
