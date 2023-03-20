import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Upload from "../components/Upload";
import PrivateRoute from "../PrivateRoute";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Templates from "../components/Templates";
import Dashboard from "../components/Dashboard";

function DashboardRoutes() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <PrivateRoute>
      <div className="flex flex-col min-h-screen">
        <Sidebar toggle={handleClick} style="hidden lg:flex" />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/add" element={<Upload />}></Route>
          <Route path="/templates" element={<Templates />}></Route>
        </Routes>
      </div>
    </PrivateRoute>
  );
}

export default DashboardRoutes;
