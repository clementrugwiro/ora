import React from "react";
import "./index.css";
import Home from "./routes/home.js";
import About from "./routes/about.js";
import Contact from "./routes/contact.js";
import Services from "./routes/services.js";
import { Routes, Route } from "react-router-dom";
import LoginView from "./pages/LoginView";
import Login from "./components/Auth/Login";
import Upload from "./components/Upload";
import DashboardRoutes from "./routes/DashRouts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginView />}></Route>
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
    </Routes>
  );
}

export default App;
