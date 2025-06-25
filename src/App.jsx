import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomeFiles/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import WhyUs from "./Components/WhyUsFiles/WhyUs";
import About from "./Components/AboutFiles/About";
import Contact from "./Components/ContactFiles/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="why-us" element={<WhyUs />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
