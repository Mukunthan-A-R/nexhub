import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Plumbing from "./pages/Plumbing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plumbing" element={<Plumbing />} />
      <Route path="/projects" element={<About />} />
      <Route path="/settings" element={<Help />} />
    </Routes>
  );
};

export default App;
