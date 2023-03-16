import React from "react";
import "./index.css";
import Home from "./routes/home.js";
import About from "./routes/about.js";
import Contact from "./routes/contact.js";
import Services from "./routes/services.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
