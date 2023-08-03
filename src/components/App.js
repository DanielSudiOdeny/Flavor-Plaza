import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "./Home";
import Restaurants from "./Restaurants";

function App() {
  return (
    <>
      <div className="route ">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
