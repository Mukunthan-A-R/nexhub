import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Plumbing from "./pages/Plumbing";
import CarMechanic from "./pages/CarMechanic";
import Electrician from "./pages/Electrician";
import BikeMechanic from "./pages/BikeMechanic";
import Cleaner from "./pages/Cleaner";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/plumbing" element={<Plumbing />} />
      <Route path="/electrician" element={<Electrician />} />
      <Route path="/car-mechanic" element={<CarMechanic />} />
      <Route path="/bike-mechanic" element={<BikeMechanic />} />
      <Route path="/cleaning-work" element={<Cleaner />} />

      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default App;
