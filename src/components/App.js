import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "../Navigations/Login";
import Home from "./Home";
import Menu from "../Navigations/Menu";

function App() {
  return (
    <>
      <div className="route app-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
