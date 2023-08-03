import React, { useState } from "react";
import TopNavBar from "../Navigations/TopNavBar";
import SidePanel from "../Navigations/SidePanel";
// import Menu from "../Navigations/Menu";
import Home from "./Home";
import Footer from "./Footer";

const Welcome = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="welcome-container">
      <TopNavBar />

      <SidePanel handleComponentChange={handleComponentChange} />

      <div className="main-content">{/* <Menu /> */}</div>
      <Footer />
    </div>
  );
};

export default Welcome;
