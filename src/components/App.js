// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "../pages/Login";
// import Home from "./Home";
// import Restaurants from "./Restaurants";

// function App() {
//   return (
//     <>
//       <div className="route ">
//         <Router>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/restaurants" element={<Restaurants />} />
//           </Routes>
//         </Router>

//         <footer>Get in touch with us</footer>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Welcome from "./Welcome";
import Login from "../pages/Login";
import Home from "./Home";
import Menu from "../pages/Menu";

function App() {
  return (
    <>
      <div className="route app-container">
        <Router>
          <Routes>
            {/* <Route path="/" element={<Welcome />} /> */}
            <Route path="/menu/:restaurantId" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/Welcome" element={<Welcome />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
