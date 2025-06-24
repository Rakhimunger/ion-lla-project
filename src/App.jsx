import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomeFiles/Home";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
