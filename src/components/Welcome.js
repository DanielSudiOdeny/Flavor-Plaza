import React, { useState } from "react";
import TopNavBar from "../Navigations/TopNavBar";
import SidePanel from "../Navigations/SidePanel";
import Footer from "./Footer";

const Welcome = () => {
  const [setSelectedComponent] = useState(null);

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
