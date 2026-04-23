import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Plumbing from "./pages/Plumbing";
import CarMechanic from "./pages/CarMechanic";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plumbing" element={<Plumbing />} />
      <Route path="/car-mechanic" element={<CarMechanic />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};

export default App;
